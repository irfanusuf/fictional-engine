import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  //api call

  const url = "http://localhost:4001/user/register";
  const formaData = { username, email, password };

  const handleRegister = async () => {
    try {
      const register = await axios.post(url, formaData);

      if (register) {
        toast.success(register.data.message)
      
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

<>

    <ToastContainer position="top-center" />

    <div className="container">
      <div className="form-container">
        <h2> Register With Us</h2>
        <form>
          <input
            placeholder="Enter your username"
            type="text"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            placeholder="Enter Your Email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="Enter Your Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </form>

        <button onClick={handleRegister}> Register </button>
      </div>
    </div>

    </>
  );
};

export default Register;
