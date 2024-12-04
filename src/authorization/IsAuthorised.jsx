import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const IsAuthorised = () => {

  const navigate = useNavigate()

    const token = localStorage.getItem("token")


    useEffect(()=>{

        if(!token) {
            return  navigate("/login")
          }

    })
    


}

export default IsAuthorised