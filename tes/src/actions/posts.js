import {CREATE,FETCH_ALL,FETCH_USER_DATA,FETCH_UPLOAD_CNT,FETCH_POST,UPDATE} from "../constants/actionTypes";
import * as api from '../api';

//action Creators
export const getPosts =()=>async (dispatch) => {

    try {
        const {data} = await api.fetchPosts();
        dispatch ({type:FETCH_ALL,payload:data})
    } catch (error) {
        console.log(error.message)
        
    }
}

export const getUserData = (uid,dataType) =>async (dispatch) => {

    try {
        console.log("GetData" + dataType)
        const {data} = await api.fetchUserData(uid,dataType);
        console.log(data)
        dispatch ({type:FETCH_USER_DATA,payload:data})
    } catch (error) {
        console.log(error.message)
        
    }
}

export const getUploadCnt = (uid) =>async (dispatch) => {

    try {
        const {data} = await api.fetchUploadCnt(uid);
        console.log(data)
        dispatch ({type:FETCH_UPLOAD_CNT,payload:{count:data}})
    } catch (error) {
        console.log(error.message)
        
    }
}


export const getPost =(id)=>async (dispatch) => {

    try {
        const {data} = await api.fetchPost(id);
        dispatch ({type:FETCH_POST,payload:{post:data}})
    } catch (error) {
        console.log(error.message)
        
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type:CREATE,payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const upvote = (id,uid) => async (dispatch)=>{
    try {
        console.log("in actions")
        
        const {data} = await api.upvote(id,uid);

        dispatch({type:UPDATE,payload:data});

    } catch (error) {
        console.log(error)
    }
}


