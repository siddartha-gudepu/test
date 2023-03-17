import mongoose from "mongoose";
// import { string } from "prop-types";

const userSchema = mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },

        firstname: {
            type: String,
            required: true

        },
        lastname: {
            type: String,
            required: true

        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        department: String,
        role: String,
        followers: [],
        following: [],
        saved: [],
        answered: []



    }, { timestamps: true })
    // time stamps store the creation and updation of unstances of this schema

const UserModel = mongoose.model("User", userSchema);
export default UserModel