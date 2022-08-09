import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{
          padding: "10px",
          marginBottom: "20px",
        }}
        type="text"
        placeholder="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        style={{
          padding: "10px",
          marginBottom: "20px",
        }}
        type="password"
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        onClick={handleClick}
        style={{
          padding: "10px",
          width: "100px",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
