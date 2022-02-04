import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.css";
import { login } from "../../JS/Actions/user";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handelChangeUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <div className="form-container">
      <div className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>

        {/* Email input */}
        <div className="input-container ic1">
          <input
            id="email"
            className="input"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={handelChangeUser}
          />
          <div className="cut" />
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>

        {/* {password input } */}
        <div className="input-container ic2">
          <input
            id="password"
            className="input"
            type="text"
            placeholder=" Password"
            value={user.password}
            onChange={handelChangeUser}
          />

          <div className="cut cut-short" />
          <label htmlFor="password" className="placeholder">
            Password
          </label>
        </div>
        <button
          type="text"
          className="submit"
          id="login"
          onClick={() => dispatch(login(user))}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
