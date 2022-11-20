// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'

function LoginForm({ setShowModal }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const error = []

  const demoUser = () => {
    return dispatch(sessionActions.login({credential:'demoman', password:'demoknightTF2'}))
    .then(() => setShowModal(false))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const user = await dispatch(sessionActions.login({ credential, password }))
    console.log('user info:', user)
    if (user == undefined){
      error.push('Credentials did not match an existing user.')
    }
    if (error.length) return setErrors(error)
    return dispatch(sessionActions.login({ credential, password }))
    .then(() => setShowModal(false))
    .catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className="body">
    <form className="form" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <span className="splashText">Welcome Back</span>
        <input className="username"
          type="text"
          placeholder="Username or Email"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <input className="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      <button className="login" type="submit">Log In</button>
    </form>
    <div className="demoUser">
    <button id="DemoUser" onClick={demoUser}>Demo User</button>
    </div>
    </div>
  );
}

export default LoginForm;
