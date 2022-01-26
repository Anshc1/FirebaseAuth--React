import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {  useNavigate  } from 'react-router-dom'
import {Button ,Container , Nav , NavDropdown} from  'react-bootstrap'
function Navbarr() {
    let navigate = useNavigate(); 
    const handleLogout =()=>{
        sessionStorage.removeItem('Auth Token'); 
        navigate('/login'); 
    }
    return <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button variant="outline-danger" onClick={handleLogout} >Logout</Button> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>;
}

export default Navbarr;
