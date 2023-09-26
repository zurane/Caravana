import React from "react";

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({
        email: "",
        password: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(loginFormData);
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
        
        <form>

        </form>
        
        </>
    )
}


