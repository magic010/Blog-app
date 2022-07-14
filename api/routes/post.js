const express = require('express')
const router = express.Router();
const {createPost, updetedPost, deletePost, getPost, getAllPost} = require('../controllers/posts.js');

router.post('/',createPost);
router.put('/:id',updetedPost);
router.delete('/:id',deletePost);
router.get('/:id',getPost);
router.get('/',getAllPost);

module.exports = router