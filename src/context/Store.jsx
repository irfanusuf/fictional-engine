import { createContext, useState } from "react";
import App from "../App";
import axios from "axios";

export const Context = createContext();

const Store = () => {
  const token = localStorage.getItem("token");

  const [store, setStore] = useState({
    loading: false,
    user: {},
    lightMode : true,
    count : 0
  });

  const getUserFrombackend = async () => {
    try {
      setStore((prev) => ({ ...prev, loading: true })); 
      const url = `http://localhost:4001/user/getUser/?token=${token}`;
      const { data } = await axios.get(url); // response from backend in the form of promise
      setStore((prev) => ({ ...prev, user: data.user })); //state immutation
    } catch (error) {
      console.error(error);
    } finally{
      setStore((prev) => ({ ...prev, loading: false })); 
    }
  };

  const toggleDarkMode = () =>{
    setStore((prev) => ({ ...prev, lightMode: false })); 
  }


  const handleIncrement = () => {
     let x = 0
      x++
    setStore((prev) => ({ ...prev, count: x  })); 
  };




  return (
    <Context.Provider value={{ ...store, getUserFrombackend , toggleDarkMode  , handleIncrement}}>
      <App />
    </Context.Provider>
  );
};

export default Store;
