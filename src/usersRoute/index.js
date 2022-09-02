const router = require('express').Router();

const { login, createUser, getAllUsers } = require('./usersServices');

router.get('/', getAllUsers);
router.post('/login', login);
router.post('/signup', createUser);

export default router;
