const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.post('/signup',userController.postSignup);
userRouter.post('/login',userController.postLogin);

module.exports = userRouter;
