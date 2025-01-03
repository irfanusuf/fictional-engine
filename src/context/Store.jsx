import { createContext, useState } from "react";
import App from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../utils/axiosInstance";

export const Context = createContext();



const Store = () => {

  const token = localStorage.getItem("token");


  const navigate = useNavigate();

  const [store, setStore] = useState({
    loading: false,
    user: {},
    lightMode: true,
    count: 0,
  });

  const getUserFrombackend = async () => {
    try {
      setStore((prev) => ({ ...prev, loading: true }));
      const url = `http://localhost:4001/user/getUser/?token=${token}`;
      const { data } = await axios.get(url); // response from backend in the form of promise
      setStore((prev) => ({ ...prev, user: data.user })); //state immutation
    } catch (error) {
      console.error(error);
    } finally {
      setStore((prev) => ({ ...prev, loading: false }));
    }
  };

  const toggleDarkMode = () => {
    setStore((prev) => ({ ...prev, lightMode: false }));
  };

  const handleRegister = async (formaData) => {
    try {
      const url = "http://localhost:4001/user/register";
      const res = await axios.post(url, formaData);

      if (
        res.status === 200 &&
        res.data.message === "User Created Sucessfully!"
      ) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (formaData) => {
    try {
      const url = "http://localhost:4001/user/login";

      const res = await axios.post(url, formaData);

      if (res.status === 200 && res.data.message === "Logged in succesfully!") {
        toast.success(res.data.message);
        const token = res.data.payload;
        localStorage.setItem("token", token);
        navigate("/userProfile");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response.status === 500) {
        // toast.error(error.message)        // error.message is a generic error message
        toast.error("Server Error!");
      }
      console.log("errorhai:" + error);
    }
  };

  const isTokenAuthenticated = async (token) => {
    try {
      const res = await api.get(`/token/verify/?token=${token}`);
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const deleteProfile = async(formaData) => {

    try {
       //  const url= ""

      // const response = await fetch(url , {

      //   method : "DELETE",
      //   headers:{},
      //   body : {}
      

      // })

      const res = await api.post(`/user/delete?token=${token}` , formaData)

      if(res.status === 200){
        toast.success(res.data.message)
      }
      else{
        toast.error(res.data.message)
      }
      
    } catch (error) {
      console.log(error)
    }

  

  };




  

  return (
    <Context.Provider
      value={{
        ...store,
        getUserFrombackend,
        toggleDarkMode,
        handleRegister,
        handleLogin,
        isTokenAuthenticated,
        deleteProfile
      }}
    >
      <App />



    </Context.Provider>
  );
};

export default Store;
