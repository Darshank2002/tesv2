import React from 'react';
import {Navbar,Container,Nav,NavDropdown,Alert} from 'react-bootstrap'
import logo from "../static/assets/logo.png"
import profileDef from "../static/assets/profileDef.png"
import "../static/css/Header.css"
import { useAuth } from '../contexts/AuthContext';
import {useHistory} from 'react-router-dom';



function Header(){
const {currentUser , logout} = useAuth();
const history = useHistory();
async function handleLogout() {
  

  try {
    await logout()
    history.push("/")
  } catch(error) {
    console.log(error)
   
  }
}

    return(
      


        <div>
        <Navbar id="Header">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              
              height="65"
              className="d-inline-block align-top"
            />{' '}
         
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Item id="Profile">

           
            <NavDropdown 
            align="end"
            title={
                <img  src={currentUser?currentUser.photoURL:profileDef} alt="" />
            } id="basic-nav-dropdown">
            <NavDropdown.Item>  
            {currentUser&&<Alert  variant="success">
            Logged in as {currentUser && currentUser.displayName} !
          </Alert>}
          {!currentUser&&<Alert  variant="danger">
          Not Logged in!
        </Alert> }         
          </NavDropdown.Item>
          { currentUser && 
            <NavDropdown.Item  href={currentUser?`/profile/${currentUser.uid}`:"/login"}>Profile</NavDropdown.Item>}
            { currentUser && 
              <NavDropdown.Item href="/upload">Upload</NavDropdown.Item>}
            <NavDropdown.Divider />
            {currentUser&&<NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>}
            {!currentUser&&<NavDropdown.Item href="/login">Login</NavDropdown.Item>}
          </NavDropdown>
          </Nav.Item>
        </Nav>
        
        </Container>
      </Navbar>
        </div>
    )
}

export default Header;