const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
import bcrypt from 'bcrypt'

mongoose.connect("mongodb://localhost:27107/projectdb", { useNewUrlParser: true });
a

import UserModel from './Models/userModels';
app.use(bodyParser.json());

app.post('/signup', async(req, res) => {
    const data = req.body;
    const userName = data.userName;
    const email = data.email;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(data.password, salt);
    const firstName = data.firstname;
    const lastName = data.lastname;
    const newUser = new UserModel({ username: userName, email: email, password: hashedPass, firstname: firstName, lastname: lastName });
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
        const user = await userModel.findOne({ username: userName });
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

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});