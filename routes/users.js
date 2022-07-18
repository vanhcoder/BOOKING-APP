const express = require('express');
const user = require('../models/User');
const userController = require('../api/controller/UserController');
const router = express.Router();
const verifyToken = require('../util/verifyToken');

router.get('/checkToken', verifyToken.checkToken , (req , res , next) => {
    res.send("hello user , you are logged in")
})


router.get('/checkUser/:id', verifyToken.checkUser , (req , res , next) => {
    res.send("hello user , you are logged in and you can delete your account")
})

router.get('/checkAdmin/:id', verifyToken.checkAdmin , (req , res , next) => {
    res.send("hello admin , you are logged in and you can delete all account")
})

// update
router.put('/:id', userController.update)
// userController
 router.delete('/:id', userController.delete)
// get all
router.get('/', userController.getAll)
// get one 
router.get('/:id', userController.getByID)

module.exports = router;