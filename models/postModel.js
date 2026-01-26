//models\postModel.js


const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    userName : {
        type : String,
        ref : "User",
        required : true
    },
    postTitle: {
        type: String,
        required: true,
    },

    postDescription: {
        type: String,

    },
    postContent: {
        type: String,
        required: true,

    },
    createdAt: {
        type: Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Post', postSchema)