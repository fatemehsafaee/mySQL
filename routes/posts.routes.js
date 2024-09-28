const { Router } = require('express');

const router = Router();

const {
    updatePostbyid,
    deletePostbyid
} = require('../controllers/posts.controller')




router.put('/:id', updatePostbyid);
router.delete('/:id', deletePostbyid);




module.exports = router