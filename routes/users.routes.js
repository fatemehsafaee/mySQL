const { Router } = require('express');

const router = Router();

const {
    getAllUsers,
    createUser,
    updateUserbyid,
    deleteUserbyid
} = require('../controllers/users.controller')

const {
    getAllPosts,
    createPost,
} = require('../controllers/posts.controller')

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUserbyid);
router.delete('/:id', deleteUserbyid);

//on posts
router.get('/:id/posts', getAllPosts);
router.post('/:id/posts', createPost);


module.exports = router