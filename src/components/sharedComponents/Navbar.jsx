import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();

  const [showSideBar, setShowSideBar] = useState(false);

  const handleMenu = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="navbar">


    {/* display block on smaller scrreen and display none on bigger screen  */}
      <div className="hamburger">
        <span onClick={handleMenu}>
        
          {showSideBar ? <IoMdClose /> : <GiHamburgerMenu />}
        </span>
      </div>

      {showSideBar && (
        <div className="sidebar animate__animated animate__bounceInLeft">
          <ul>
            <li>
              {" "}
              <Link to="/"> Home </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/services"> Services </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about"> About </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact"> Contact </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/register"> Register </Link>{" "}
            </li>
          </ul>
        </div>
      )}



        {/* dispplay none on smaller screen  and block on bigger screen  */}
      <ul>
        <li>
          {" "}
          <Link to="/"> Home </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/services"> Services </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/about"> About </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/contact"> Contact </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/register"> Register </Link>{" "}
        </li>
      </ul>

      <div className="userProfile">
        <button
          onClick={() => {
            navigate("/userProfile");
          }}
        >
          {" "}
          user profile{" "}
        </button>
      </div>



    </div>
  );
};

export default Navbar;
