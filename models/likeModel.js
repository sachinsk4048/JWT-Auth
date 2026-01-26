//models\likeModel.js

const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
});

// 1 user can like only one post once
likeSchema.index({ userId: 1, postId: 1 }, { unique: true });

module.exports = mongoose.model("Like", likeSchema);
