import React from "react";
import { useLoaderData, Form, useNavigate, redirect } from "react-router-dom";
import { login } from "../api";

export function loader({ request }) {
  const url = new URL(request.url).searchParams.get("message");
  return url;
}
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await login({ email, password });
  // localStorage.setItem("loggedin", true);
  return redirect("/host");
}


export default function Login() {
  const [status, setStatus] = React.useState("idle");
  const [errStatus, setErrStatus] = React.useState(null);
  const navigate = useNavigate()

  function warning() {
    const warningMessage = useLoaderData();
    return warningMessage;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrStatus(null);
    login(loginFormData)
      .then(data => {
        navigate("/host", {replace: true})
      })
      .catch((err) => setErrStatus(err))
      .finally(() => setStatus("idle"));
  }
  // setLoginFormData((prev) => ({ ...prev, [name]: value }));:
  // This line uses the setLoginFormData function (likely from the React useState hook) to update the component's state.
  // It does so by creating a new state object based on the previous state (prev) and merging it with a new object where the property [name] is set to the new value.
  // This is a common pattern for updating a specific property in a state object without mutating the rest of the state.
  // function handleChange(e) {
  //   // const { name, value } = e.target;: This line extracts the name and value properties from the e.target object.
  //   // In React, the e.target represents the DOM element that triggered the event,
  //   // which in this case would be the input element that the user interacted with.
  //   // name typically corresponds to the name attribute of the input element,
  //   //  and value represents the current value of the input.
  //   const { name, value } = e.target;
  //   setLoginFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

  
  const warningPopUp = warning();
  const styling = {
    color: "red",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    margin: 15 + "px",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="form">
        <h3>Sign to your account</h3>
        {errStatus && <h1>{errStatus.message}</h1>}
        {warningPopUp && <span style={styling}>⚠{warningPopUp}</span>}
        <div className="form-container">
          <Form method="post">
            <label>Email Address</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <br />
            <button onClick={handleSubmit} disabled={status === "submitting"}>
              {status === "submitting" ? "Logging in..." : "Log in"}
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

