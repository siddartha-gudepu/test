// copy paste
import { deleteUser, followUser, getUser, postsAnswered, UnFollowUser, updateUser } from '../Controllers/UserController.js';

import express from "express";

const router = express.Router();

router.get('/:id', getUser)
router.get('/:id/answered', postsAnswered)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnFollowUser)
export default router;