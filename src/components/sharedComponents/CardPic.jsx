import React, { useContext } from 'react'
import { Context } from '../../context/Store'


const CardPic = () => {

const {username}  = useContext(Context)
 

  return (
    <div>
        
   
      this is a username coming from context <b> {username} </b>





    </div>
  )
}

export default CardPic