import React from "react";
import { useRouteError } from "react-router-dom";

export default function HandleError() {
    const error = useRouteError();
    return (
        <>
            <h3>{error.message}</h3>
            <pre>{error.status} - {error.statusText}</pre>
        </>
    )
}