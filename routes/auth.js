const express = require('express');
const user = require('../models/User');
const router = express.Router();
const userController = require('../api/controller/AuthController');

router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router;