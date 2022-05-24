const express = require('express');
const router = express.Router();

const {
  getPageControl,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} = require('../controllers/page-control.js');

router.route('/').get(getPageControl).post(addRecipe);
router.route('/:recipe').patch(updateRecipe).delete(deleteRecipe);

module.exports = router;
