const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.postSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const isExist = await User.findOne({ email })
        if (isExist) {
            return res.status(409).send({ message: "uer already exist" })
        }
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hash });
        return res.status(201).send({ message: 'user created' })
    } catch (err) {
        res.status(500).send({ err, message: "something went wrong" });
    }

}

exports.postLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            console.log('user not found');
            return res.status(404).send({ message: 'user not found' });
        }
        const ismatch = await bcrypt.compare(password, user.password)
        if (!ismatch) {
            return res.status(404).send({ message: "Invalid credentials" })
        }
        const token = await jwt.sign({userId : user._id,email},process.env.JWT_SECRET,{expiresIn : "1h"})
        res.cookie('token',token,{
            httpOnly:true
        })
        return res.status(200).send({ message: "login successfully" })
    } catch (err) {
        res.status(500).send({ err, message: "something went wrong" });
    }
}