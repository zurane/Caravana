import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export function loader({ request }) {
    const url = new URL(request.url).searchParams.get("message");
    return url;
}
export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({
        email: "",
        password: "",
    });

    function warning() {
        const warningMessage = useLoaderData();
        return warningMessage;
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(loginFormData);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    const warningPopUp = warning();

    const styling = {
        color: "red",
        fontSize: "14px",
    };

    return (
        <>
            <div className="form">
                <h3>Sign to your account</h3>
                {warningPopUp && <span style={styling}>{warningPopUp}</span>}
                <div className="form-container">
                    <form>
                        <label>Email Address</label>
                        <br />
                        <input type="email" placeholder="Enter your email address" />
                        <br />
                        <label>Password</label>
                        <br />
                        <input type="password" placeholder="Enter your password" />
                        <br />
                        <button>
                            <Link to="/Host">Sign in</Link>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
