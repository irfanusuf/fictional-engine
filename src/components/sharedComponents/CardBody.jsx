import React, { useContext } from 'react'
import CardPic from './CardPic'
import { Context } from '../../context/Store'


const CardBody = () => {

   const {username , loading , setLaoding}  = useContext(Context)


  return (
    <div> 
        
        <h1> this is a card body belonging to {username}</h1>
        <CardPic/>
        
        <button onClick={()=>{setLaoding(!loading)}}> Refresh </button>


</div>
  )
}

export default CardBody