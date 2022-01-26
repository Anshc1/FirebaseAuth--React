import React from 'react';
import Button from 'react-bootstrap/Button'
import '../App.css'
import logo from '../assets/icons8-google-drive.gif'
function Welcome() {
    return(
    <div className="form ">
        <img src={logo} alt="loading..." />
        <div className="box d-grid gap-3">
            <h1>Welcome to AcDrive</h1> 
            <Button variant="outline-dark" href="/login">Log in</Button>
            <Button variant="outline-dark" href="signup">Create an Account</Button>
            <Button variant="outline-dark">Forgot Password ?</Button>        
        </div>
    </div>
    )
}

export default Welcome;
