// middlewares\authMiddleware.js

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.authMiddleware = async (req, res, next) => {
    try {
        // const token = req.cookies.token || req.headers["authorization"]?.split(" ")[1];
        const token = req.cookies.token || req.headers["authorization"]?.split(" ")[1];
        if (!token) {
            return res.status(401).send({ message: 'unauthorize !token' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).send({ message: 'unauthorize  !user' });
        }

        req.user = user;
        next();
    } catch {
        return res.status(401).send({ message: 'unauthorize  tryyyyy' });
    }
}