import express from "express";

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import UserModel from './Models/userModels.js';

const app = express();

app.use(bodyParser.json());
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://adithyaadiraju:HZRneBO4OOmRHDVE@cluster0.dtsjx5q.mongodb.net/key?retryWrites=true&w=majority")
app.listen(5000, () => console.log("listening at port 5000 ..."));

app.post('/signup', async(req, res) => {
    const data = req.body;
    const userName = data.userName;
    const email = data.email;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(data.password, salt);
    const firstName = data.firstname;
    const lastName = data.lastname;
    UserModel.findOne({ username: userName }, function(err, row) {
        if (err) {
            console.log(err);
        } else {
            res.status(500).json({ message: "username already exists" });

        }
    })
    var newUser = new UserModel({ username: userName, email: email, password: hashedPass, firstname: firstName, lastname: lastName });
    try {

        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});
app.post('/login', async(req, res) => {
    const data = req.body;
    const userName = data.userName;
    const password = data.password;
    try {
        const user = await UserModel.findOne({ username: userName });
        if (user) {
            const validity = await bcrypt.compare(password, user.password);
            validity ? res.status(200).json(user) : res.status(400).json("Wrong password");
        } else {
            res.status(404).json("user does not exist");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// app.put('/changepassword/:id', [
//     check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
// ], async(req, res) => {
//     try {
//         const { password } = req.body;
//         const { id } = req.params;

//         // validate input data
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(422).json({ errors: errors.array() });
//         }

//         // hash new password
//         const saltRounds = 10;
//         const hashedPassword = await bcrypt.hash(password, saltRounds);

//         // update user's password in database
//         const user = await UserModel.findByIdAndUpdate(id, { password: hashedPassword });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.status(200).json({ message: 'Password changed successfully' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

app.use('/user', UserRoute);
app.use('/post', PostRoute);
app.use('/auth', AuthRoute);


// vvBpTXY8OSuf4YD2
// HZRneBO4OOmRHDVE