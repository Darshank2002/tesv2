import React,{useEffect,useState} from 'react';
import {Nav,Container,Row,Tabs, Tab , Dropdown} from 'react-bootstrap'
import { TiArrowSortedUp } from 'react-icons/ti'
import { RiSettings3Fill } from 'react-icons/ri'
import "../static/css/Profile.css"

import SingleCard from './SingleCard';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import { useAuth } from '../contexts/AuthContext';
import {getUserData,getUploadCnt} from '../actions/posts.js'; 
import {getUser} from '../actions/user.js';
import { useParams} from 'react-router-dom';




function ProfilePage(props){
const {currentUser} = useAuth();
const {uid} = useParams();
const dispatch = useDispatch();
const {posts,upvotesInfo} = useSelector((state)=>state.posts);
const user = useSelector((state)=>state.user[0]);
console.log("posts")
console.log(posts)
console.log("upvotes")
console.log(upvotesInfo);
useEffect(()=>{
dispatch(getUser(uid));
},[uid])

useEffect(()=>{
    dispatch(getUploadCnt(uid));
},[uid]) 




const[tab,setTab]=useState(currentUser.uid == uid ?"upvotes":"uploads") 
const handleSelect = (key) =>{
switch (key) {
    case "uploads":
        setTab("uploads")
        break;
    case "upvotes":
        setTab("upvotes")
        break;

}



}
useEffect(()=>{
    dispatch(getUserData(uid,tab))
    console.log("dispatched" + tab)

},[tab])



    return(
        <div>

        <Container id="ProfilePage">

            <Row className="justify-content-center my-4">
                <div className="col-3 col-md-1 align-self-center" id="profilePhoto">
                        <img className="mx-auto" src={user&&user.photoURL} alt="" />
                </div>
                <div className="col-4 col-md-3 align-self-center" id="profileInfo">
                        <h5>{user&&user.displayName}</h5>
                </div>

                <div className="col-4 col-md-2">
                    <div className="upvoteCnt text-center">
                    <Row className="justify-content-center">
                        <div className="col-6 align-self-center">
                        <h5>{upvotesInfo&&upvotesInfo.count}</h5>
                        </div>
                        <div className="col-6 align-self-center">                    
                        <h3><TiArrowSortedUp/></h3>  
                        </div>                    
                    </Row>

                    </div>
                </div>

                {false&&(currentUser.uid==uid)&&<div className="col-4 col-md-2">
                    <div className="followBtn text-center">
                    <Row className="justify-content-center">
                        <div className="col-6 align-self-center">                    
                        <h4><RiSettings3Fill /></h4>
                        
                        </div>
                   
                    </Row>

                    </div>
                    </div>}

                

            </Row>
            <Row className="justify-content-center" id="ProfileTabs">
            <Tabs defaultActiveKey={currentUser.uid == uid ?"upvotes":"uploads"}  className="mb-3 justify-content-center my-4" onSelect={handleSelect}>
                {(currentUser.uid==uid)&&<Tab  eventKey="upvotes" title="Upvotes" id="tab">
                <Container className="px-0">
                
                    <Row className="justify-content-center">
                    <h6 className="text-center mt-md-5">{posts.length} upvotes</h6>
                    
                    {posts && posts.map((post)=>(
                    <div className="col-12 col-md-6">

                            <SingleCard post={post} knowMoreShow={true} showOpen={true} id={post._id}  style={{margin: "20px 10px"}}/>
                            </div>
                        ))}                        
                    
                    

 
                        </Row>                
                </Container>
                </Tab>}
                <Tab eventKey="uploads" title="Uploads" id="tab">
                <Container  className="px-0">
                
                    <Row className="justify-content-center">
                    <h6 className="text-center  mt-md-5">{posts.length} uploads</h6>
                    
                    {posts.map((post)=>(
                    <div className="col-12 col-md-6">

                            <SingleCard post={post} knowMoreShow={true} showOpen={true} id={post._id} style={{margin: "20px 10px"}}/>
                            </div>
                        ))}                        
                    
                    

 
                        </Row>                
                </Container>

                </Tab>

            </Tabs>
            </Row>
        </Container>
        </div>
    )
}

export default ProfilePage;

