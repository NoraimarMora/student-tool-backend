'use strict'

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const checkUserSchema = require('../schemas_validator/user');

router.post('/user', checkUserSchema, UserController.addUser);
router.get('/user/:id', UserController.getUser);
router.get('/users', UserController.getAllUsers);
router.put('/user/update/:id', checkUserSchema, UserController.updateUser);
router.delete('/user/delete/:id', UserController.deleteUser);

module.exports = router;