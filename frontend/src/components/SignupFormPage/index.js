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
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const error = []

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") error.push("Username is required.")
    if (username.length < 4) error.push("Username must be at least four characters long.")
    if (password === "") error.push("Password is required")
    if (password.length < 4) error.push("Password must be at least four characters.")
    if (!email.includes("@")) error.push("Email must be a valid email.")
    if (password !== confirmPassword) error.push('Confirm Password field must be the same as the Password field')
    if (error.length) return setErrors(error)
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password, firstName, lastName }))
      .then(() => setShowModal(false))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
  };

  return (
    <div className="body">
    <form className="form" onSubmit={handleSubmit}>
      <ul>
        {error.map((error, idx) => <li key={idx}>{error}</li>)}
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <span className="splashText">Welcome!</span>
        <input
          className="email"
          type="text"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="username"
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="firstName"
          type="text"
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          required
        />
        <input
          className="lastName"
          type="text"
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          required
        />
        <input
          className="password"
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="password"
          type="password"
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div className = "signupButtonDiv">
      <button id="signup" type="submit">Sign Up</button>
      </div>
    </form>
    </div>
  );
}

export default SignupFormPage;
