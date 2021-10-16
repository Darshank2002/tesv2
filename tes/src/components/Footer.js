import React from 'react';
import {Navbar,Container,Nav,NavDropdown,Alert,Row} from 'react-bootstrap'
import "../static/css/Footer.css"


function Footer(){
    return(
        <div id="Footer">
        <Row className="text-center">
        <span className="text-muted">© 2021 TheEngineeringSphere<br/></span>
        </Row>
        </div>
    )
}

export default Footer;