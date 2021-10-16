import mongoose from "mongoose";

import PostMessage from '../models/postMessage.js'
import User from '../models/user.js'

export const getPosts  = async (req,res)=>{
    try{
        const postMessage = await PostMessage.find().sort({upvoteCount:-1,createdAt:-1});
        
        res.status(200).json(postMessage);
    }catch(error){
res.status(404).json({message:error.message})
    }
}

export const getUserData = async (req,res)=>{

    const {uid,dataType} = req.params;
    const posts = await PostMessage.find()
    switch (dataType) {
        case "upvotes":
            try{
                const Upvotes = posts.filter((post)=>post.upvoteCount.includes(uid) )
                res.status(200).json(Upvotes);
            }catch(error){ 
                res.status(404).json({message:error.message})
            }            
            break;
        case "uploads":
            try{
                const Uploads = posts.filter((post)=>post.creatorUID === uid)
                res.status(200).json(Uploads);
            }catch(error){ 
                res.status(404).json({message:error.message})
            }            
            break;    
        default:
            break;
    }


}


export const getUpvoteCnt = async (req,res)=>{

    const {uid} = req.params;
    const posts = await PostMessage.find()

            try{
                var count = 0; 
                const Uploads = posts.filter((post)=>post.creatorUID === uid)
                for(let i = 0; i< Uploads.length ; i++){
                    var upload = Uploads[i]
                    count += upload.upvoteCount.length
                }
                res.status(200).json({uid,count});
            }catch(error){ 
                res.status(404).json({message:error.message})
            }            
 

}



export const getPost  = async (req,res)=>{
    const {id:_id} =req.params;
    console.log("ID : " + _id);
    try{
        const post = await PostMessage.findById(_id)
        
        res.status(200).json(post);
    }catch(error){
        console.log("Failed!")
res.status(404).json({message:error.message})
    }
}


export const createPost  = async (req,res)=>{

    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({error:error.message})
    }
}

// export const createUSer = async (req,res)=>{

//     const user = req.body;
//     const newUser = new User(user);
//     try {
//         await newUser.save();
//         res.status(201).json(newUser)
//     } catch (error) {
//         res.status(409).json({error:error.message})
//     }
// }

export const upvote = async (req,res)=>{

    const { id : _id} = req.params;
    var upvoteStatus = false;
    const uid = String(req.params.uid)
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with this ID");

    const post = await PostMessage.findById(_id);
    // const currentUser = await User.findOne({userID : uid})
    const index = post.upvoteCount.findIndex((id)=>id === uid);



    if(index === -1){
        post.upvoteCount.push(uid);
        
        // currentUser.userUpvotes.push(post._id)

    }
    else{
        post.upvoteCount = post.upvoteCount.filter((id)=>id !== uid);
        // currentUser.userUpvotes = currentUser.userUpvotes.filter((id)=>id == post._id)
    }
    const updatePost = await PostMessage.findByIdAndUpdate(_id,post,{new:true})
    // const updatedUser = await
    res.json(updatePost); 
}