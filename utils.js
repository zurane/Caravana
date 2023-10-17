import {
    redirect
} from "react-router-dom";

export function requiredAuth() {
    const isLogged = localStorage.getItem('loggedin');
    // check if the user is not logged in and if not then redirect to the login page
    if (!isLogged) {
        throw redirect("/login?message=You must login first")
    }
}

// Function to be passed to our Login page.

