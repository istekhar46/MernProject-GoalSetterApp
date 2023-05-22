const asyncHandler = require('express-async-handler');

// @desc Get Goals
// @rout GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {

    res.json({ message: 'GET Goals' })
})

// @desc set Goals
// @rout SET /api/goals
// @access Private

const SetGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please inter Text here')
    }
    res.json({ message: 'POST Goals' })
})


// @desc set Goals
// @rout PUT /api/goals
// @access Private

const updateGoals = asyncHandler(async (req, res) => {
    res.json({ message: `PUT Goals ${req.params.id}` })
})


// @desc set Goals
// @rout DELETE /api/goals
// @access Private

const deleteGoals = asyncHandler(async (req, res) => {
    res.json({ message: `DELETE Goals ${req.params.id}` })
})


module.exports = { getGoals, SetGoals, updateGoals, deleteGoals }