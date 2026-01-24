// routers\userRouter.js

const express = require('express');
const userRouter = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const { authMiddleware, accessRole } = require('../middlewares/authMiddleware');
const validate= require('../middlewares/validateMiddleware');
const { signupSchema, loginSchema,resetPasswordSchema } = require('../validator/userValidator');
const refreshController = require('../controllers/refreshController');


userRouter.get('/',userController.getIndex);
userRouter.post('/signup',validate(signupSchema),authController.postSignup);
userRouter.get('/verify/:token',authController.verifyEmail);
userRouter.post('/forgetPassword',authController.postForgetPassword);
userRouter.post('/resetPassword/:token',validate(resetPasswordSchema),authController.postResetPassword)
userRouter.post('/login',validate(loginSchema),authController.postLogin);
userRouter.post('/logout',authController.getLogout);
userRouter.get('/profile',authMiddleware,userController.getViewProfile);
//userRouter.get('/admin',authMiddleware,accessRole(['admin']),authController.getProfile);
userRouter.get('/refresh',refreshController.refreshToken);
module.exports = userRouter;
