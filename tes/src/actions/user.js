import {CREATE_USER, FETCH_USER} from "../constants/actionTypes";
import * as api from '../api';


export const createProfile = (user) => async (dispatch) => {
    try {
        const {data} = await api.createProfile(user);
        dispatch({type:CREATE_USER,payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getUser =(uid)=>async (dispatch) => {

    try {
        const {data} = await api.fetchProfile(uid);
        console.log("in users action")
        console.log(data)
        dispatch ({type:FETCH_USER,payload:data})
    } catch (error) {
        console.log(error.message)
        
    }
}