import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from '../Models/userModel.js';

export const createPost = async(req, res) => {
    const newPost = new PostModel(req.body);
    try {
        await newPost.save();
        res.status(200).json("post created");
    } catch (error) {
        res.status(500).json(error);
    }
};




export const getPost = async(req, res) => {
    const id = req.params.id;
    try {
        const post = await PostModel.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updatePost = async(req, res) => {
    const postId = req.params.id;
    const { userId } = req.body;
    try {
        const post = await PostModel.findById(postId);
        if (post.userId == userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("post updated");
        } else {
            res.status(403).json("action forbidden");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deletePost = async(req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
        const post = await PostModel.findById(id);
        if (post.userId == userId) {
            await post.deleteOne();
            res.status(200).json("complete");
        } else {
            res.status(403).json("action forbidden");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const likePost = async(req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
        const post = await PostModel.findById(id);
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } });
            res.status(200).json("complete")
        } else {
            await post.updateOne({ $pull: { likes: userId } });
            res.status(200).json("Post unliked");
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const answerPost = async(req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
        const post = await PostModel.findById(id);
        const answer = new PostModel(req.body);
        const user = await UserModel.findById(userId);
        try {
            await answer.save();
            await post.updateOne({ $push: { answers: answer } });
            await user.updateOne({ $push: { answered: answer } });
            res.status(200).json("answer posted");
        } catch (error) {
            res.status(500).json(error);
        }


    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteAnswer = async(req, res) => {
    const id = req.params.id;
    const { userId, answerId } = req.body;

    try {
        const post = await PostModel.findById(id);
        const answer = await PostModel.findById(answerId);
        const user = await UserModel.findById(userId);
        if (answer.userId == userId) {
            await post.updateOne({ $pull: { answers: answer } });
            await post.updateOne({ $pull: { answered: answer } });
            await answer.deleteOne();
            res.status(200).json("complete");
        } else {
            res.status(403).json("action forbidden");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getTimelinePosts = async(req, res) => {
    const userId = req.params.id;

    try {
        const currentUserPosts = await PostModel.find({ userId: userId });
        const followingPosts = await UserModel.aggregate([{
                $match: {
                    _id: new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts"
                }
            },
            {
                $project: {
                    followingPosts: 1,
                    _id: 0
                }
            }
        ])
        res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts).sort((a, b) => {
            return b.createdAt - a.createdAt;
        }));
    } catch (error) {
        res.status(500).json(error);
    }
}