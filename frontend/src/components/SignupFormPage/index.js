import './SignupForm.css';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

function SignupFormPage({setShowModal}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  //USE THIS FOR CONDITIONAL RENDERING ^^^^^
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const error = []

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") error.push("Username is required.")
    if (username.length < 5) error.push("Username must be at least 5 characters long.")
    if (password === "") error.push("Password is required")
    if (!email.includes("@")) error.push("Email must be a valid email.")
    if (password !== confirmPassword) error.push('Confirm Password field must be the same as the Password field')
    if (error.length) return setErrors(error)
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
      .then(() => setShowModal(false))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {error.map((error, idx) => <li key={idx}>{error}</li>)}
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;
