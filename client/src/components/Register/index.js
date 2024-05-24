import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Cookies from "js-cookie";

import "./index.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmitForm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    axios
      .post("http://localhost:5555/", userData)
      .then(() => {
        enqueueSnackbar("Registered successfully", { variant: "success" });
        navigate("/login");
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="app-container">
      <form className="form-container" onSubmit={onSubmitForm}>
        <h1 className="app-heading-register">Register</h1>
        <input
          type="text"
          className="input-el"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        
        <input
          type="email"
          className="input-el"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          className="input-el"
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          required
        />
        <button type="submit" className="register-button">
          Register
        </button>
        <p className="link-text">Already have an account? <a href="/login" target="_self" className="login-link-text">Login</a></p>
      </form>
    </div>
  );
};

export default Register;
