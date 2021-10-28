import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import "./signup.styles.css";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {error && { error }}
        <input
          name="email"
          type="text"
          class="signup-form"
          placeholder="Email"
          ref={emailRef}
          required
        />
        <input
          name="password"
          type="password"
          class="signup-form"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <input
          name="confirmPassword"
          type="password"
          class="signup-form"
          placeholder="Confirm Password"
          ref={passwordConfirmRef}
          required
        />
        <button disabled={loading} type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <div className="">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Signup;
