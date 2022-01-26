import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../App.css'
import logo from '../assets/icons8-google-drive.gif'
function Commonform({ title, setPassword, setEmail, handleAction }) {
    return (
        <div className="form ">
            <img src={logo} alt="loading..." />
            <div className="box">
                <div className="fs-1 fw-normal d-flex justify-content-center ">{title}</div>
                <Form className="flex-column d-flex justify-content-center">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted" >
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" onClick={handleAction} >
                        {title}
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Commonform;
