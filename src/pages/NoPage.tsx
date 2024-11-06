import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function NoPage() {
    const navigate = useNavigate();

    const onReturn = () => {
        navigate('/');
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1>Error</h1>
            <h3>This page doesn't exist</h3>
            <Button variant="dark" onClick={onReturn}>Return to Star Wars</Button>
        </div>
    );
}