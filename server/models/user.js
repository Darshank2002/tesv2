import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userID:{
        type:String,
        default:""
    },
    displayName:{
        type:String,
        default:""       
    },
    photoURL:{
        type:String,
        default:""          
    },
    tagline:{
        type:String,
        default:""           
    },
    upvoteCnt:{
        type:Number,
        default:0         
    }
    


})



const User = mongoose.model('user' , userSchema);

export default User;