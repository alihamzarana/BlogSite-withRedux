import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../redux/actions/blogActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLoginData = useSelector((state) => state.blogReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    dispatch(userLogin(data, navigate));
  };
  return (
    <div className="create">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          name="passowrd"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
        <h5>
          want to <Link to={"/register"}>Register?</Link>
        </h5>
      </form>
    </div>
  );
};

export default Login;
