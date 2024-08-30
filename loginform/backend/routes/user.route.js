const express = require('express');
const router = express.Router();
const {getAllUsers, saveUsers, updateUser, deleteUser, getUser} = require('../controller/user.controller')


router.post('/login', getUser)
router.get('/', getAllUsers);
router.post('/signup', saveUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports= router;