const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const protect = asyncHandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token from Header

            token = req.headers.authorization.split(" ")[1]

            // Verify Token ..

            const decode = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from token ..

            req.user = await User.findById(decode.id).select('-password')

            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not Authorized')

        }
    }

    if (!token) {
        res.status(401)
        throw new Error('No Token, Not Authorized')
    }

})

module.exports  = {protect}