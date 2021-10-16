import React,{useState} from 'react';
import {Container,Row,Form,Alert,Button,Col} from 'react-bootstrap'

import "../static/css/Upload.css"


import {useDispatch} from 'react-redux';

import {createPost} from '../actions/posts.js'; 
import { useAuth } from '../contexts/AuthContext';



function Upload(){
    const[message,setMessage] = useState("")
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const {currentUser} = useAuth();
    const[state,setState]=useState({
        postTitle:"",
        postBranch:"",
        postType:"",
        postDescription:"",
        postPlatform:"",
        postLink:"",
        postTags:"",
        creatorName:currentUser.displayName,
        creatorUID:currentUser.uid,
        creatorPhotoURL:currentUser.photoURL
    })
    
    const [loader, setLoader] = useState(false);
    
    
    const handleChange = (e) => {
        
        const {id , value} = e.target   
        
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
        
    }


    const handleSubmitClick = (e) => {
        e.preventDefault();
        // console.log(state)

        dispatch(createPost(state))
    
        
    
          setState({    
            postTitle:"",
            postBranch:"",
            postType:"",
            postDescription:"",
            postPlatform:"",
            postLink:"",
            postTags:"",})

            setMessage("Submitted!")
            setShow(true)
    
      }



    return(
        <div>

        <Container>
        

 
        <Row className="text-center m-4" >
            <h3>Upload Your Resources</h3>
            <h6>as {currentUser.displayName}</h6>
            </Row>
            <Row className="text-center my-1 mx-2 mx-md-4" >
            <Alert variant="info" className="text-start" id="infoAlert">
            <b>NOTE:<br/></b>
            1)Upload your Original Content.
            <br/>
            2)Do not post irrelevent content, your account will be banned.
          </Alert>
  
        </Row>
        <Row className="justify-content-center">
        
        <div className="col-12 col-md-8">
        {message&&<Alert variant="success" onClose={() => setMessage("")} dismissible>
        <h6>{message&&message}</h6>
  </Alert> } 
        <Form id="UploadForm" onSubmit={handleSubmitClick}>
                <Form.Group className="mb-3" controlId="postTitle">
                <Form.Label>Name of the Resource:</Form.Label>
                <Form.Control type="text" id="postTitle" value={state.postTitle} onChange={handleChange} required/>
                </Form.Group>
                <Row className="g-2">
                        <Col md>
                        
                        <Form.Label>Engineering Field</Form.Label>

                            <Form.Select aria-label="Floating label select example" id="postBranch" value={state.postBranch} onChange={handleChange} required>
                            
                            <option value="null">Select</option>
                            <option value="computer">Computer</option>
                            <option value="electrical">Electrical</option>
                            <option value="clectronics">Electronics</option>
                            <option value="mechanical">Mechanical</option>
                            <option value="civil">Civil</option>
                            <option value="biotech">Biotech</option>
                            <option value="other">other</option>
                            </Form.Select>                
                        </Col>
                        <Col md>
                        <Form.Label>Type of the Resource</Form.Label>
                        <Form.Select aria-label="Floating label select example" id="postType"  value={state.postType} onChange={handleChange} required>
                                
                        <option value="null">Select</option>
                        <option value="videos">Videos</option>
                        <option value="courses">Courses</option>
                        <option value="articles">Articles</option>
                        <option value="books">Books</option>

                            </Form.Select>
                        </Col>
                </Row>
                <Form.Group className="mb-3" controlId="postDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} id="postDescription"  value={state.postDescription} onChange={handleChange} required/>
                </Form.Group>
                <Row className="g-2">
                        <div className="col-4">
                                <Form.Label>Type:</Form.Label>
                                <Form.Select aria-label="Floating label select example" id="postPlatform"  value={state.postPlatform} onChange={handleChange} required>
                                    
                            <option value="null">Select</option>
                            <option value="Youtube">Youtube</option>
                                    <option value="Linkedin">Linkedin</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                        </div>            
                        <div className="col-8">
                                <Form.Group className="mb-3" controlId="postLink">
                                    <Form.Label>Link of the Resource:</Form.Label>
                                    <Form.Control type="url" id="postLink"  value={state.postLink} onChange={handleChange} required/>
                                </Form.Group>            
                        </div>             
                </Row>
                <Form.Group className="mb-3" controlId="postTags">
                    <Form.Label>Tags (seperated by comma)</Form.Label>
                    <Form.Control type="tags" id="postTags"  value={state.postTags} onChange={handleChange} required/>
                </Form.Group> 
                <Row className="justify-content-center mt-4">
                        <div className="col-4 col-md-2  text-center" hidden>
                            <Button variant="danger" size="lg" type="reset">
                            Reset
                            </Button>
                        </div>
                        <div className="col-4  col-md-2 text-center">
                            <Button variant="primary" size="sm" type="submit" className="mb-5">
                            Submit
                            </Button>
                        </div>           
                </Row>

      </Form>         
        </div>
       
        </Row>
        </Container>
        </div>
    )
}

export default Upload;