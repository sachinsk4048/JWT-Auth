// routers\userRouter.js

const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, accessRole } = require('../middlewares/authMiddleware');
const validate= require('../middlewares/validateMiddleware');
const { signupSchema, loginSchema } = require('../controllers/validator/userValidator');

userRouter.get('/',userController.getIndex);
userRouter.post('/signup',validate(signupSchema),userController.postSignup);
userRouter.post('/login',validate(loginSchema),userController.postLogin);
userRouter.get('/profile',authMiddleware,userController.getProfile);
userRouter.get('/admin',authMiddleware,accessRole(['admin']),userController.getProfile);

module.exports = userRouter;
