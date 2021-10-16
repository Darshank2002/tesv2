import React ,{useRef} from 'react';
import {Container,Form,Row,Button} from 'react-bootstrap'
import loginLogo from "../static/assets/loginLogo.png"
import Glogin from "../static/assets/Glogin.png"
import "../static/css/Login.css"
import { useAuth } from "../contexts/AuthContext";
import {useHistory} from 'react-router-dom';


function Signup(){
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {currentUser, signup } = useAuth()
  const history = useHistory()


  async function handleSignUpSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert("Passwords do not match")
    }
    try {

      await signup(emailRef.current.value, passwordRef.current.value)
      console.log(currentUser.uid)
      history.push("/home")
      
    } catch(error) {
      console.log(error)
    }

  }
    return(
        <Container id="LoginPage">
        <Row className="justify-content-center" id="loginLogo">
<img src={loginLogo} alt="" />

        </Row>
        <Row className="justify-content-center mt-4 mt-md-0" id="loginTitle">
        <h4 className="text-center mb-4">Sign In</h4>
        </Row>
            <Row className="justify-content-center">
                <div className="col-12 col-md-4">

              <Row className="justify-content-center my-3">
              <div className="col-10 col-md-8" id="GoogleLogin">
               <a href="#"> <img src={Glogin} alt="" /></a>
              </div>
              </Row>
                </div>
                
            </Row>
       
       </Container>
    )
}

export default Signup;