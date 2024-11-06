import React from "react";
import { useSelector } from "react-redux";
import { StoreStateType } from "../store";
import { Navigate } from "react-router-dom";

interface ProtectedProps {
    children: React.ReactElement;
}

export default function ProtectedPage(props: ProtectedProps) {
    const isLoggedIn = useSelector((state: StoreStateType) => {
        return state.login.isLoggedIn;
    })

    if (isLoggedIn) {
        return props.children;
    }
    else {
        return <Navigate to="/" />;
    }
}