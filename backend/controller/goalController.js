const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');

// @desc Get Goals
// @rout GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.find({ user: req.user.id });
    res.status(200).json(goal);
})

// @desc set Goals
// @rout SET /api/goals
// @access Private

const SetGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please inter Text here')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    });
    res.status(200).json(goal)
})


// @desc set Goals
// @rout PUT /api/goals:id 
// @access Private



const updateGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }


    // check user

    if (!req.user) {
        res.status(401)
        throw new Error('user not authorized')
    }

    // make sure logged in user matches the goal

    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('user not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal);
})


// @desc set Goals
// @rout DELETE /api/goals:id
// @access Private

const deleteGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400)
        throw new Error("Goal not found ")
    }


    // check user

    if (!req.user) {
        res.status(401)
        throw new Error('user not authorized')
    }

    // make sure logged in user matches the goal

    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('user not authorized')
    }

    await Goal.findByIdAndRemove(req.params.id)

    res.status(200).json({ id: req.params.id })
})


module.exports = { getGoals, SetGoals, updateGoals, deleteGoals }