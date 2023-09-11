/* eslint-disable react/prop-types */
import { useState } from "react";
import Carusel from "./Carusel";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && password) {
      setFormSubmitted(true);
      console.log("Name:", name);
      console.log("Password:", password);
    } else {
      setErrorMessage("Please Input Valid Credentials");
    }
  };

  if (!formSubmitted) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <p id="error-message">{errorMessage}</p>
          <label htmlFor="login-name">Name</label>
          <input
            type="text"
            name="login-name"
            id="login-name"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            name="login-password"
            id="login-password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="submit-btn" type="submit">
            Submit
          </button>
        </form>
        <img
          src="https://skinnyms.com/wp-content/uploads/2015/03/9-Best-Grumpy-Cat-Memes-1.jpg"
          alt=""
        />
        <FormSubmit formSubmitted={formSubmitted} />
      </div>
    );
  } else {
    return (
      <>
        <div>
          <h2>Good JERB!</h2>
        </div>
        <Carusel />
      </>
    );
  }
}

function FormSubmit({ formSubmitted, errorMessage }) {
  return (
    <div>
      <p id="error-message">{errorMessage}</p>
      {formSubmitted && <p>Form Submitted Successfully!</p>}
    </div>
  );
}
