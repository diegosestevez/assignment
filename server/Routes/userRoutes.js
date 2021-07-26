const express = require('express');
const userController = require('./../Controllers/userController');

const router = express.Router();

router.route('/')
.get(userController.getAllUsers)
.delete(userController.deleteAllUsers)

router.route('/create')
.get(userController.createDefaultUsers)

router.route('/signin')
.post(userController.createUserToken)

router.route('/verifyToken')
.get(userController.verifyUserToken)

module.exports = router;
