const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check_auth');
const UserController = require('../controllers/user');

router.post('/signup', checkAuth, UserController.user_signup );

router.post('/:login', checkAuth, UserController.user_login);

router.delete('/:userId',  UserController.user_delete);

module.exports = router;