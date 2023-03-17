import UserModel from "../Models/userModels.js";

export const registerUser = async(req, res) => {
    const { firstname, lastname, username, password, email } = req.body;
    var newUser = new UserModel({
        firstname,
        lastname,
        username,
        password,
        email
    })
    try {
        await newUser.save(function() {});
        registerUser.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}