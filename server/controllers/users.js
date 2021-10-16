import mongoose from "mongoose";

import User from '../models/user.js'

export const getProfile  = async (req,res)=>{
    const {uid} = req.params;
    try {
        const users = await User.find();
        const ProfileUser = users.filter((user)=>user.userID==uid)
        res.status(200).json(ProfileUser);
    } catch (error) {
        res.status(404).json({message:error.message})

    }
}

export const createProfile = async (req,res)=>{
    const users = await User.find();

    const user = req.body;
    const newUser = new User(user);
    const index = users.findIndex((u)=>u.userID === user.userID);
    
    try {
        if(index===-1){
        await newUser.save();
        res.status(201).json(newUser)            
        }
        if(index!==-1){
            res.status(204) 
        }

    } catch (error) {
        res.status(409).json({error:error.message})
    }
}