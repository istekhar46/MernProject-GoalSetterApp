const express = require('express');
const { getGoals, SetGoals, updateGoals, deleteGoals } = require('../controller/goalController')
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, SetGoals);
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals);

module.exports = router;