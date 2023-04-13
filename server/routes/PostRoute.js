import express from "express";
import { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost, answerPost, deleteAnswer, topicPosts, userPosts } from "../Controllers/PostController.js";
const router = express.Router()

router.post('/', createPost)
router.get('/', topicPosts)
router.get("/user", userPosts)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete("/:id", deletePost)
router.put("/:id/like", likePost)
router.put("/:id/answer", answerPost)
router.delete("/:id/answer", deleteAnswer)
router.get("/:id/timeline", getTimelinePosts)
export default router;