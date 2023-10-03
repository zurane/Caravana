import {
    redirect
} from "react-router-dom";

export function requiredAuth() {
    const isLogged = false;
    // check if the user is not logged in and if not then redirect to the login page
    if (!isLogged) {
        throw redirect("/login?message=You must login first")
    }
}