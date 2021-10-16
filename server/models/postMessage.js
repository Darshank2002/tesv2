import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    postTitle:String,
    postBranch:String,
    postType:String,

    postDescription:String,
    postPlatform:String,
    postTags:String,
    creatorUID:{
        type:String,
        default:""
    },
    creatorName:{
        type:String,
        default:"TES User"
    },
    creatorPhotoURL:{
        type:String,
        default:""
    },
    upvoteCount:{
        type:[String],
        default:[],
    },
    postLink:String,
    createdAt:{
        type:Date,
        default : new Date()
    },
})

const PostMessage = mongoose.model('postMessage' , postSchema);
export default PostMessage; 