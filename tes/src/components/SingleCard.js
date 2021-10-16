import React from 'react';
import {Row,Button,Card,Badge} from 'react-bootstrap'
import "../static/css/SingleCard.css"
import profileDef from "../static/assets/profileDef.png"
import {SiYoutube,SiLinkedin,SiWebstorm} from 'react-icons/si'

import {IoIosArrowDropupCircle,IoIosArrowDropup} from 'react-icons/io'
import {useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {upvote} from '../actions/posts.js'; 
import { useAuth } from "../contexts/AuthContext";






function SingleCard(props){
const dispatch = useDispatch();
const[upStatus,setUpStatus] = useState(false);
const history = useHistory();
const { currentUser } = useAuth()
const file = props.post;



const handleSingleRedirect = (e) => {
    e.preventDefault();
    // let path = '/home?searchTerm='+searchTerm;
    if(currentUser){
    history.push({
      pathname:`/content/${file._id}`,    
    });        
    }
    else{
        history.push("/login")
    }

    
};

  const handleUpvote=()=>{
      console.log("Clicked")
      dispatch(upvote(file._id,currentUser.uid));
    
  }

const upvoteBtn= async ()=>{
    if(currentUser){
        const a = await handleUpvote();


    }
    else{
        history.push("/login");
    }
} 

  const handlePlatform=(platform)=>{
    switch (platform) {
        case "Youtube":
            return(<SiYoutube/>)
        case "Linkedin":
            return (<SiLinkedin/>)
        default:
            return (<SiWebstorm/>)
    }
  }
  
  


    return(
        <div id="SingleCard">
        <Card style={props.style}>
        <Card.Body>
        <Row>
            <div className="col-10 col-md-10" id="content">
                <Row>
                <div className="col-3 col-md-2" id="profilePhoto">
                <a href={`/profile/${file.creatorUID}`}><img className="mx-auto" src={file.creatorPhotoURL?file.creatorPhotoURL:profileDef} alt="" /></a>
                </div>
                <div className="col-9 align-self-center" id="profileInfo">
                <p>Uploaded By</p>
                <h6>{file.creatorName}</h6>
                </div>

                </Row>

                <Row id="Title">
                    <h5 className="text-left">{file.postTitle}</h5>
                    <p>On {file.postPlatform}  {handlePlatform(file.postPlatform)}</p>                            
                </Row>
                <Row>
                <div className="col-7 col-md-4" id="KnowMore" style={{display:props.knowMoreShow ?"block":"none"}}>
                <Button variant="warning" onClick={handleSingleRedirect}>Know More</Button>                
                </div>
                <div className="col-5 col-md-3" id="Open" style={{display:props.showOpen ?"block":"none"}}>
                <a className="btn btn-warning" href={currentUser?file.postLink:"/login"} target="_blank">Open</a>
                </div>
               </Row>
            </div>

            <div className="col-2 col-md-2 text-center" id="rank" onClick={upvoteBtn}>
            <div id="rank-inner">
            {currentUser&&!(file.upvoteCount.find((id)=>id===String(currentUser.uid)))&&<h2 id="upArrow"><IoIosArrowDropup/></h2>}
            {currentUser&&file.upvoteCount.find((id)=>id===String(currentUser.uid))&&<h2 id="upArrow"><IoIosArrowDropupCircle/></h2>}
                <Badge  bg="light" text="dark" >
                <h3 className="m-0">{file.upvoteCount.length}</h3></Badge>                        
            </div>

            
            </div>                                             
        </Row>
        </Card.Body>
        </Card>
        </div>
    )
}

export default SingleCard;