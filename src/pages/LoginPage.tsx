import "../styles/LoginPage.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserState } from "../reducers/loginReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});

export default function LoginPage() {
    const {register, handleSubmit, formState: { errors }} = useForm<UserState>({
        resolver: yupResolver(schema)
    });
    const [failLogin, setFailLogin] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<UserState> = async (data) => {
        if (data.username === "admin" && data.password === "test") {
            dispatch({type:'LOGIN_SUCCESS', payload: data});
            navigate('/starwars/people');
            console.log('success login');
        }
        else {
            dispatch({type: 'LOGIN_FAIL'});
            setFailLogin(true);
            console.log('fail login');
        }
    }

    return (
        <div className="w-full h-full flex items-center flex-col">
            <div className="login-header w-full py-10 flex justify-center">Star Wars World</div>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="form-title mb-6">Login to Star Wars</div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 relative flex flex-col items-center">
                    <div className="input-div">
                        <label>Username</label>
                        <input {...register("username")} className={`${errors.username ? "invalid-input" : "normal-input"}`} />
                    </div>
                    <div className="error-input">{errors.username?.message}</div>
                    <div className="input-div">
                        <label>Password</label>
                        <input {...register("password")} type="password" className={`${errors.password ? "invalid-input" : "normal-input"}`} />
                    </div>
                    <div className="error-input">{errors.password?.message}</div>
                    <button type="submit" className="w-1/2 px-4 py-3">
                        Login
                    </button>
                    <div className="error-input absolute m-0 -bottom-6">{failLogin ? 'Failed Login' : ''}</div>
                </form>
            </div>
        </div>
    );
}