const express = require('express');
const router = express.Router();
const { category,categoryAll } = require('../controllers/categories.js');

router.post('/',category);
router.get('/',categoryAll);

module.exports= router;