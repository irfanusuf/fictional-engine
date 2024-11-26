import axios from "axios";
import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");

  const getUserFrombackend = async () => {
    

    const token = localStorage.getItem("token")

    const url = `http://localhost:4001/user/getUser/${token}`;

    const response = await axios.get(url);

    setusername(response.data.user.username);
    setEmail(response.data.user.email);
  };


  useEffect(()=>{

    getUserFrombackend()

  }, [])



  return (
    <div className="container">
      <h1> This is the user Profile page </h1>

      <p>
        {" "}
        username : <span> {username} </span>{" "}
      </p>
      <p>
        {" "}
        email : <span> {email} </span>{" "}
      </p>
    </div>
  );
};

export default UserProfile;
