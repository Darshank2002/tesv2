import express from 'express';
import {getPosts,createPost,upvote,getPost,getUserData,getUpvoteCnt} from '../controllers/posts.js';

const router = express.Router();

router.get('/',getPosts)
router.get('/content/:id',getPost)
router.get('/:dataType/:uid/',getUserData)
router.get('/h/upvotecnt/:uid',getUpvoteCnt)
router.post('/',createPost)
// router.post('/createUser',createUser)
router.patch('/:id/:uid/upvote',upvote) 

export default router;  