const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// @desc Register User 
// @rout POST /api/users
// @access Public 

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('please Enter all fields ')
    }

    // check for user alreaady exist 

    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400)
        throw new Error('user already exist ')
    }

    // Hash Password  

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    // creating new user 

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generaterToken(user._id),

        })
    }
    else {
        res.status(400)
        throw new Error('Invalid User ')
    }
})


// @desc Login User 
// @rout POST /api/users/login
// @access private 

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generaterToken(user._id),
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid credintial')
    }
    res.status(200).json({ message: 'Login User' })
})



// @desc User data Display..
// @rout GET /api/users/me
// @access Private

const getMe = asyncHandler(async (req, res) => {

    const { _id, name, email } = await User.findById(req.user.id)

    res.status(200).json({
        _id,
        name,
        email,
    })

})

// Generater JWT

const generaterToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}
module.exports = { registerUser, loginUser, getMe }