const User = require('../models/userModel')

exports.getIndex = async (req, res) => {         //it display all the users on index page
    try {
        const allUsers = await User.find();
        return res.status(200).json(allUsers);
    } catch {
        return res.status(500).json({ message: "something wnt wrong" });
    }
}

exports.getViewProfile = (req, res) => {
    const { name, email, role, avatar } = req.user;
    return res.status(200).send({ name, email, role, avatar });
}

exports.postUploadAvatar = async (req, res) => {
    try {

    } catch (error) {

    }
}