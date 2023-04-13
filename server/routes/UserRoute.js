import { deleteUser, followUser, getUser, postsAnswered, UnFollowUser, updateUser, search, suggestions, changePassword } from '../Controllers/UserController.js';

import express from "express";

const router = express.Router();

router.get('/:id', getUser)
router.get('/', search)
router.get('/:id/answered', postsAnswered)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnFollowUser)
router.get('/:id/suggest', suggestions)
router.put('/:id/changepassword', changePassword)

export default router;