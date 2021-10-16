import express from 'express';
import {getProfile,createProfile} from '../controllers/users.js';

const router = express.Router();

router.get('/:uid',getProfile)
router.post('/',createProfile)

export default router;