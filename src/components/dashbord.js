import React from 'react';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom'
import Centre from './Centre';
import Navbarr from './Navbarr'
function Dashboard() {
    let navigate = useNavigate(); 
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        if(authToken){
            navigate('/dashboard')
        }else{
            navigate('/login')
        }
    }, [])
    return(
    <>
     <Navbarr/>
     <Centre/>
    </> 
    )
}

export default Dashboard

