import {React} from 'react';
import {Container,Row} from 'react-bootstrap'
import "../static/css/Home.css"


function About(){
    return(
        <div>
        <Container >
        <Row className="justify-content-center py-5">
        <h4 className="text-center">About Us</h4>
        </Row>
        <Row className="justify-content-center px-5">
        <p>TheEngineeringSphere was created with the idea of providing everything that an engineer needs.</p>
        <p>TheEngineeringSphere is a student-operated platform created for engineering community to get best content for learning from all over the internet, Ranked by Learners!</p>
        <p>This platform is a first step towards our aim of providing everything that an engineer needs!</p>
        </Row>
        </Container>
        </div>
    )
}

export default About;