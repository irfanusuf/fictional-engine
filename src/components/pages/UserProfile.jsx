
import React, { useContext } from "react";
import Card from "../sharedComponents/Card";
import { Context } from "../../context/Store";
import IsAuthorised from "../../authorization/IsAuthorised";


const UserProfile = () => {

   IsAuthorised()

  const {user} = useContext(Context)
 

  return (
    <div className="container">
      <h1> This is the user Profile page </h1>

      <p>
    
        username : <span> {user.username} </span>{" "}
      </p>
      <p>
       
        email : <span> {user.email} </span>{" "}
      </p>


    
      <Card />
    </div>
  );
};

export default UserProfile;
