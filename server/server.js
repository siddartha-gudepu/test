import express from "express";
import session from 'express-session';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import UserModel from './Models/userModels.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';


import cors from 'cors';
const app = express();
const corsOpts = {
    origin: 'http://localhost:3000',

    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ],

    allowedHeaders: [
        'Content-Type',
    ],
    credentials: true
};

app.use(cors(corsOpts));
app.use(bodyParser.json());



const token = jwt.sign({ username: 'user123' }, 'your-secret-key');
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://adithyaadiraju:HZRneBO4OOmRHDVE@cluster0.dtsjx5q.mongodb.net/key?retryWrites=true&w=majority").then(
    app.listen(5000, () => console.log("listening at port 5000 ...")));


app.post('/signup', async(req, res) => {
    const data = req.body;
    console.log(data);
    const userName = data.username;
    const email = data.email;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(data.password, salt);
    const firstname = data.firstname;
    const lastname = data.lastname;

    console.log(userName, "user");
    UserModel.findOne({ username: userName }, function(err, row) {
        if (err) {
            console.log(err);
            console.log("coundnt fecth from db");
        } else {

            if (row) {
                res.status(500).json({ message: "username already exists" });

            } else {
                var newUser = new UserModel({ username: userName, email: email, password: hashedPass, firstname: firstname, lastname: lastname });
                try {
                    newUser.save();
                    req.session.username = userName;

                    res.status(200).json(newUser);
                } catch (error) {
                    res.status(500).json({ message: error.message });
                }

            }

        }
    })



});
app.post('/login', async(req, res) => {
    const data = req.body;
    const userName = data.data.userName;
    const password = data.data.password;
    try {
        const user = await UserModel.findOne({ username: userName });
        if (user) {
            const validity = await bcrypt.compare(password, user.password);
            if (validity) {
                req.session.username = userName;
                res.status(200).json(user)
            } else { res.status(400).json("Wrong old password"); }
        } else {
            res.status(404).json("user does not exist");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Middleware function to check if user is authenticated
const verifyUser = function(req, res, next) {
    // Get the token from session
    if (req.session && req.session.username) {
        // User is authenticated, proceed to the next middleware
        return next();
    } else {
        // User is not authenticated, redirect to login page
        res.status(401).json({ message: 'Unauthorized access' });
    }

};


app.use('/user', verifyUser, UserRoute);
app.use('/post', verifyUser, PostRoute);
app.use('/auth', verifyUser, AuthRoute);