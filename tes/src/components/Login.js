import React,{useState,useRef} from 'react';
import {Container,Alert,Form,Row,Button} from 'react-bootstrap'
import loginLogo from "../static/assets/loginLogo.png"
import Glogin from "../static/assets/Glogin.png"
import "../static/css/Login.css"
import { useAuth } from '../contexts/AuthContext';
import {signInWithGoogle} from '../firebase/config';
import {useHistory} from 'react-router-dom';

import {useDispatch} from 'react-redux';
import {createProfile} from '../actions/user.js'; 

    


function Login(){
  const dispatch = useDispatch();


  const emailRef = useRef()
  const passwordRef = useRef()
  const history = useHistory();
  const {login} = useAuth()
  const[loader,setLoader]=useState(false)
  const [msg , setMsg] = useState("")
  const[err,setErr] = useState("")
  const[Show,setShow] = useState(false)

  async function handleLoginSubmit(e) {
    e.preventDefault()

    try {
      setLoader(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/home")
    
    } catch(error){
      console.log("Email and password do not match!");

      setErr(error.message)
      setShow(true)


    }
    setLoader(false)
  }

 

  const GoogleLogin = async () =>  {
    setLoader(true)

    const log = await signInWithGoogle();

    console.log(log.uid)
    console.log(log.displayName)
    console.log(log.photoURL)
    dispatch(createProfile(
     { userID:log.uid,
      displayName:log.displayName,
      photoURL:log.photoURL,}
      ))


    history.push("/home"); 
    setLoader(false)
  }
  
    return(
        <Container id="LoginPage">
        <Row className="justify-content-center" id="loginLogo">
<img src={loginLogo} alt="" />

        </Row>
        <Row className="justify-content-center mt-4 mt-md-0" id="loginTitle">
        <h4 className="text-center mb-4">Login</h4>
        </Row>
            <Row className="justify-content-center">
                <div className="col-12 col-md-4">
                <Alert show={Show} variant="danger" onClose={() => setShow(false)} dismissible>
{err}
              </Alert>
 
              <Row className="justify-content-center my-3">
              <div className="col-10 col-md-8 text-center" id="GoogleLogin">
               <a href="#" disabled={loader}> <img src={Glogin}  onClick={GoogleLogin} alt="" /></a>
              </div>
              </Row>
                </div>
                
            </Row>
       
       </Container>
    )
}

export default Login;