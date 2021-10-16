import React ,{useEffect,useState}from 'react';
import {Container,Row,Card,Badge} from 'react-bootstrap'
import { FaShareSquare} from 'react-icons/fa'
import "../static/css/SingleUpload.css"
import SingleCard from './SingleCard';

import {useDispatch,useSelector} from 'react-redux';
import { useParams} from 'react-router-dom';
import {getPost} from '../actions/posts.js'; 








function SingleUpload(props){

    const {id} = useParams();
    const {posts,post} = useSelector((state)=>state.posts);
    console.log("From MONGO");
    const [copied, setCopied] = useState(false);

    console.log(post)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPost(id));
    },[dispatch])

    if(!post) return null;

    function copy() {
        console.log("Copied! ")
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
      }




    return(
        <div>

        <Container>
        <Row className="justify-content-center">
        <div className="col-12 col-md-6">
        <SingleCard knowMoreShow={false} showOpen={true} post={post} id={post._id}  style={{margin: "40px 0px 10px 0px"}}/>
        </div>
        <div className="col-12 col-md-4" id="CreatorSection">
                <Card>
                <Card.Body>
                </Card.Body>
                </Card>
        </div>
        
        </Row>
        <Row className="justify-content-center" id="ContentBody">
        <div className="col-12 col-md-10">
        <Card>
        <Card.Body>
        <Row id="ShareBtn">
        
        
        <h1 className="text-end" >
        {copied&&<h6 className="m-0"><Badge bg="success">Link Copied!</Badge></h6>}
        <FaShareSquare onClick={copy} className="mx-1"/>


        </h1>

        </Row>
        <Row id="Description">
        <h5 className="mb-3">What's Inside Here?</h5>
        <p><pre style={{fontFamily:"inherit"}}>{post.postDescription}</pre>
        </p>  
        </Row>

        
        </Card.Body>
        </Card>
        </div>
        </Row>
        </Container>
        </div>
    )
}

export default SingleUpload;

// <TwitterShareButton>
// <FaTwitter  className="mx-1"/>

// </TwitterShareButton>


// <LinkedinShareButton url={"https://youtube.com"} title={post.postTitle}>
// <FaLinkedin  className="mx-1"/>
// </LinkedinShareButton>