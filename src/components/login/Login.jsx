import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import "./login.styles.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      login(emailRef.current.value, passwordRef.current.value);
      history.push("/flashcards");
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {error && { error }}
        <input
          name="email"
          type="text"
          class="login-form"
          placeholder="Email"
          ref={emailRef}
          required
        />
        <input
          name="password"
          type="password"
          class="login-form"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <button disabled={loading} type="" className="login-button">
          Log In
        </button>
      </form>
      <div className="">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
