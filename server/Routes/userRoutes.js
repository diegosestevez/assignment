const express = require('express');
const userController = require('./../Controllers/userController');

const router = express.Router();

router.route('/')
.get(userController.getAllUsers)
.delete(userController.deleteAllUsers)


module.exports = router;
