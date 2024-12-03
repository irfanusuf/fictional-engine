
import React, { useContext } from "react";
import Card from "../sharedComponents/Card";
import { Context } from "../../context/Store";


const UserProfile = () => {


  const {username , email} = useContext(Context)
 

  return (
    <div className="container">
      <h1> This is the user Profile page </h1>

      <p>
    
        username : <span> {username} </span>{" "}
      </p>
      <p>
       
        email : <span> {email} </span>{" "}
      </p>


    
      <Card />
    </div>
  );
};

export default UserProfile;
