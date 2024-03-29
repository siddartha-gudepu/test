import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from '../Models/userModels.js';

export const createPost = async(req, res) => {

    const userId = req.body.userId;
    const question = req.body.data.question;
    const topic = req.body.data.topic;
    const newPost = new PostModel({ userId: userId, question: question, topic: topic });


    try {
        await newPost.save();
        res.status(200).json(newPost);
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

export const topicPosts = async(req, res) => {
    const topic = req.body.topic;
    try {
        const posts = await PostModel.find({ topic: topic });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const userPosts = async(req, res) => {
    const userid = req.body.userid;
    try {
        const posts = await PostModel.find({ userId: userid });
        res.status(200).json(posts);
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
export const savePost = async(req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
        // const post = await PostModel.findById(id);
        const user = await UserModel.findById(userId);
        if (!user.saved.includes(id)) {
            user.updateOne({ $push: { saved: id } }, { new: true }, function(error, updatedDocument) {
                if (error) {
                    console.error(error);
                } else {
                    console.log(updatedDocument);
                }
            });
        } else {
            res.status(403).json("this post is already saved");
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

export const removesavedPost = async(req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
        // const post = await PostModel.findById(id);
        const user = await UserModel.findById(userId);
        if (user.saved.includes(id)) {
            user.updateOne({ $pull: { saved: id } }, { new: true }, function(error, updatedDocument) {
                if (error) {
                    console.error(error);
                } else {
                    console.log(updatedDocument);
                }
            });
        } else {
            res.status(403).json("this post is not saved");
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

export const solved = async(req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
        const post = await PostModel.findById(id);
        if (post.userId == userId) {
            await post.toggle('solved', function(err, updated) {
                if (err) {
                    console.error(err);
                } else {
                    console.log(updated);
                    try {
                        updated.save()
                    } catch (error) {
                        res.status(500).json(error);
                    }

                }
            });
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
    const userId = req.body.userId;
    const answer = req.body.answer;
    const data = { userId, answer };
    try {
        const post = await PostModel.findById(id);
        const user = await UserModel.findById(userId);
        try {
            await post.updateOne({ $push: { answers: data } });
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
    // const userId = req.params.id;

    // try {

    //     const currentUserPosts = await PostModel.find({ userId: userId });
    //     const followingPosts = await UserModel.aggregate([{
    //             $match: {
    //                 _id: new mongoose.Types.ObjectId(userId)
    //             }
    //         },
    //         {
    //             $lookup: {
    //                 from: "posts",
    //                 localField: "following",
    //                 foreignField: "userId",
    //                 as: "followingPosts"
    //             }
    //         },
    //         {
    //             $project: {
    //                 followingPosts: 1,
    //                 _id: 0
    //             }
    //         }
    //     ])
    //     res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts).sort((a, b) => {
    //         return b.createdAt - a.createdAt;
    //     }));
    // } catch (error) {
    //     res.status(500).json(error);
    // }

    const userId = req.params.id;

    try {

        const user = await UserModel.findById(userId);
        const following = user.following;

        var posts = [];
        for (let user of following) {
            const userposts = await PostModel.find({ userId: user });
            posts = posts.concat(userposts);
            console.log(posts);
        }
        // following.forEach(async(followedUserId) => {

        // const userposts = await PostModel.find({ userId: followedUserId });
        // posts = posts.concat(userposts);

        // });

        console.log("posts", posts);

        // Sort the posts by their creation time
        posts.sort((a, b) => b.created_at - a.created_at);

        res.status(200).json(posts);
    } catch (err) {
        res.status(501).json(err);

    }






}