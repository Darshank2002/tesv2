import express from 'express';
import bodyParser  from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './Routes/posts.js';
import userRoutes from './Routes/users.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

 
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/home', postRoutes)
app.use('/user', userRoutes)

app.get('/',(req,res)=>{
    res.send("Welcome to TES2.0 API")
});

// const CONNECTION_URL ="mongodb+srv://theengineeringsphere:theengineeringsphere2015@cluster0.ddotk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`listening on port ${PORT}`)))
    .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);    