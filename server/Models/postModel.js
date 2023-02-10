import mongoose from "mongoose";
import { string } from "prop-types";

const postSchema = mongoose.Schema({
        userId: {
            type: String,
            required: true
        },
        question: {
            type: String,
            required: true
        },
        solved: {
            type: Boolean
        },
        image: String,

        likes: [],
        answers: [],


    }, { timestamps: true })
    // time stamps store the creation and updation of unstances of this schema

const PostModel = mongoose.model("Post", postSchema);
export default PostModel