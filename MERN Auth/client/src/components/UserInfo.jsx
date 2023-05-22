import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"


const UserInfo = () => {
    const navigate = useNavigate();
    // NOT RECOMMENDED TO SET THE WHOLE USER DUE TO PASSWORD
    const [user, setUser] = useState("")


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getUser`, {withCredentials: true})
            .then(res=> setUser(res.data))
            .catch()
    },[])
    const logoutHandler = ()=>{
        axios.get(`http://localhost:8000/api/logout`, {withCredentials: true})
            .then(res=>navigate("/loginreg"))
            .catch()
    }
    return (
        <div className='container'>
             {user ?
              <div>
              <h1> Welcome {user && user.firstName}! You are now registered and logged in!</h1>
              <button onClick={logoutHandler} className='btn btn-outline-danger'>Logout</button>
              </div>
             :
             <div>
            <h1>Please log in to view this page</h1>
            </div>
             }
        </div>
        
    )
}

export default UserInfo