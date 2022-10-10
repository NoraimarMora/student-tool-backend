'use strict'

var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user');

router.post('/user', UserController.addUser);
router.get('/user/:id', UserController.getUser);
router.get('/users', UserController.getAllUsers);
router.put('/user/update/:id', UserController.updateUser);
router.delete('/user/delete/:id', UserController.deleteUser);

module.exports = router;