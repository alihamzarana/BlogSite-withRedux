import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { username, email, password };
    console.log("user before create", user);
    const res = await axios.post(
      "https://blogsite-server.herokuapp.com/users",
      user
    );
    console.log("response of user register", res);
    navigate("/login");
  };
  return (
    <div className="create">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input
          type="text"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button>Register</button>
        <h5>
          Already register? <Link to={"/login"}>Goto Login</Link>
        </h5>
      </form>
    </div>
  );
};

export default Register;
