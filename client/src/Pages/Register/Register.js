import "./register.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../JS/Actions/user";

const Register = () => {
  const [newUser, setnewUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handelChangeNewUser = (e) => {
    setnewUser({ ...newUser, [e.target.id]: e.target.value });
  };

  return (
    <div className="form-container">
      <div className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>

        {/* Name input */}
        <div className="input-container ic1">
          <input
            id="name"
            className="input"
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={handelChangeNewUser}
          />
          <div className="cut" />
          <label htmlFor="name" className="placeholder">
            Name
          </label>
        </div>

        {/* Email input */}
        <div className="input-container ic1">
          <input
            id="email"
            className="input"
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handelChangeNewUser}
          />
          <div className="cut" />
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>
        {/* {Phone input } */}
        <div className="input-container ic2">
          <input
            id="phone"
            className="input"
            type="text"
            placeholder="Phone "
            value={newUser.phone}
            onChange={handelChangeNewUser}
          />
          <div className="cut" />
          <label htmlFor="Phone" className="placeholder">
            Phone
          </label>
        </div>
        {/* {password input } */}
        <div className="input-container ic2">
          <input
            id="password"
            className="input"
            type="text"
            placeholder=" Password"
            value={newUser.password}
            onChange={handelChangeNewUser}
          />
          <div className="cut cut-short" />
          <label htmlFor="password" className="placeholder">
            Password
          </label>

          <button
            type="text"
            className="submit"
            id="register"
            onClick={() => dispatch(register(newUser))}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
