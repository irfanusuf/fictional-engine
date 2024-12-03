import React, { useContext, useState } from "react";
import "./Home.css";
import { Context } from "../../context/Store";

const Home = () => {
  const { user, loading , lightMode  , toggleDarkMode  , count ,handleIncrement} = useContext(Context);





 
  return (
    <>
      {loading ? (
        <div className="home-lightmode">
          <h1> Loading ...... </h1>
        </div>
      ) : (
        <div className={!lightMode ? "home-darkmode" : "home-lightmode"}>
          <h1 style={{ textAlign: "center" }}>
            this will be the home page of this website designed by
            {user.username}
            <p> email : {user.email}</p>
          </h1>

          <div>
            <h1> Total Count : {count} </h1>

            <button onClick={handleIncrement}> increment </button>
            <button onClick={toggleDarkMode}>
              {!lightMode ? "Enable Light mode" : "Enable Dark mode"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
