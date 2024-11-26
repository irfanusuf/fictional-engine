import React, { useState } from "react";
import "./Home.css"

const Home = () => {
  const [loading, setLoading] = useState(false);

  const [darkMode, setDarkmode] = useState(false);

  const [count, setCount] = useState(0);

  const handleDarkMode = () => {
    setDarkmode(!darkMode);
  };

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className={darkMode ? "home-darkmode" : "home-lightmode"}>
      <h1 style={{ textAlign: "center" }}>
        this will be the home page of this website designed by {count}
        <span> {loading ? "salik" : "irfan"}</span>
        <button
          onClick={() => {
            setLoading(!loading);
          }}
        >
          Click me
        </button>
      </h1>

      <div>
        <h1> Total Count : {count} </h1>

        <button onClick={handleIncrement}> increment </button>
        <button onClick={handleDarkMode}>{darkMode ?  "Enable Light mode" : "Enable Dark mode" }</button>
      </div>
    </div>
  );
};

export default Home;
