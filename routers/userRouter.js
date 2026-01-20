// routers\userRouter.js

const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');

userRouter.post('/signup',userController.postSignup);
userRouter.post('/login',userController.postLogin);
userRouter.get('/profile',authMiddleware,userController.getProfile);

module.exports = userRouter;
