import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate =  useNavigate()     // navigate instance of UseNavigate


  //api call

  const url = "http://localhost:4001/user/login";
  const formaData = {  email, password };

  const handleLogin = async () => {
    try {
      const login = await axios.post(url, formaData);

      if (login) {

        toast.success(login.data.message)
        const token = login.data.payload
        localStorage.setItem("token" , token) 


        navigate("/userProfile")
      
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
        <h2> Login to your account</h2>
        <form>
       
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
            
        <button onClick={handleLogin}> Login </button>
      </div>
    </div>

    </>
  );
};

export default Login;
