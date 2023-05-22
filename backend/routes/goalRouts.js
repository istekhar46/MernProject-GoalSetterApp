const express = require('express');
const {getGoals,SetGoals,updateGoals,deleteGoals} = require('../controller/goalController')
 const router = express.Router();

router.route('/').get(getGoals).post(SetGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);

module.exports = router;