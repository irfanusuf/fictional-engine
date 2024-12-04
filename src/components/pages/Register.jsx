import React, { useContext, useState } from "react";
import "./Form.css";
import {  ToastContainer } from "react-toastify";
import { Context } from "../../context/Store";

const Register = () => {

  const {handleRegister} = useContext(Context)

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //api call     // after the store implementation api calls will happen  from store

  const formaData = { username, email, password };

  return (
    <>
 

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

          <button onClick={()=>{handleRegister(formaData)}}> Register </button>
        </div>
      </div>
    </>
  );
};

export default Register;
