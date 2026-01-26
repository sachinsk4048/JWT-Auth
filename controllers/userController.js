const User = require('../models/userModel');
const Post  = require('../models/postModel');
const multer = require('multer');

exports.getIndex = async (req, res) => {         //it display all the posts on index page
    try {
        const posts = await Post.find();
        return res.status(200).json(posts);
    } catch {
        return res.status(500).json({ message: "something wnt wrong" });
    }
}

exports.getViewProfile = (req, res) => {
    const { name, email, role, avatar } = req.user;
    return res.status(200).send({ name, email, role, avatar });
}
exports.postEditProfile =async (req,res)=>{
    try{
        const {name,phone,boi} = req.body;
        await User.findByIdAndUpdate(req.user._id,{
            name,
            phone,
            boi
        });
        return res.status(200).json({message : "profile edit sucessfully"});
    }catch(error){
        return res.status(500).json({message : error.message});
    }

}

exports.postUploadAvatar = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Please upload an image"
            });
        }
        const avatarPath = req.file.path
        await User.findByIdAndUpdate(req.user._id, {
            avatar: avatarPath
        })
        return res.status(200).json({ message: "Avatar updated successfully", avatar: avatarPath })
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
}

exports.postCreatePost = async(req,res)=>{
    try{
    const {postTitle,postDescription,postContent} =req.body;
    const post = new Post({
        userId : req.user._id,
        userName : req.user.name,
        postTitle,
        postDescription,
        postContent
    })
    await post.save();
    return res.status(201).json({message : 'post created successfully',post});
    }catch(error){
         return res.status(500).json({ message: "Server Error", error: error.message });
    }
}