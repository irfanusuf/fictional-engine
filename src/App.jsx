import React from "react";

import Navbar from "./components/sharedComponents/Navbar";
import Footer from "./components/sharedComponents/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NoPage from "./components/pages/NoPage";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import UserProfile from "./components/pages/UserProfile";

// it is a special function  returning xml data which is looking like html
// function component
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="main">
        <Routes>
          <Route path="*" element = {<NoPage/>} />
          <Route path="/"  element={<Home/>} />
          <Route path="/contact" element={<Contact/>}  />
          <Route path="/about" element={<About/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/userProfile" element={<UserProfile/>} />
        </Routes> 
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
