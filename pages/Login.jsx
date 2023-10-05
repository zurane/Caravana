import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { login } from "../api";

export function loader({ request }) {
  const url = new URL(request.url).searchParams.get("message");
  return url;
}
export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = React.useState("idle");

  function warning() {
    const warningMessage = useLoaderData();
    return warningMessage;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    const postData = login(loginFormData)
      .then((data) => data)
      .catch()
      .finally(setStatus("idle"));
    console.log(postData);
  }
  // setLoginFormData((prev) => ({ ...prev, [name]: value }));:
  // This line uses the setLoginFormData function (likely from the React useState hook) to update the component's state.
  // It does so by creating a new state object based on the previous state (prev) and merging it with a new object where the property [name] is set to the new value.
  // This is a common pattern for updating a specific property in a state object without mutating the rest of the state.
  function handleChange(e) {
    // const { name, value } = e.target;: This line extracts the name and value properties from the e.target object.
    // In React, the e.target represents the DOM element that triggered the event,
    // which in this case would be the input element that the user interacted with.
    // name typically corresponds to the name attribute of the input element,
    //  and value represents the current value of the input.
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
          <form action="/login" method="post">
            <label>Email Address</label>
            <br />
            <input
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="Enter your email address"
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Enter your password"
            />
            <br />
            <button onClick={handleSubmit} disabled={status === "idle"}>
              {status ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
