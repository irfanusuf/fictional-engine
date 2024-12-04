import React, { useContext, useState } from "react";
import "./Form.css";
import { ToastContainer } from "react-toastify";
import { Context } from "../../context/Store";

const Login = () => {
  const { handleLogin } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //api call

  const formaData = { email, password };

  return (
    <>
      

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

          <button
            onClick={() => {
              handleLogin(formaData);
            }}
          >
           
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
