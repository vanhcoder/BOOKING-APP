const express = require('express');
const Hotel = require('../models/Hotel');
const HotelController = require('../api/controller/HotelController');
const router = express.Router();

// create
router.post('/', HotelController.create)
// update
router.put('/:id', HotelController.update)
// delete
 router.delete('/:id', HotelController.delete)
// get all
router.get('/', HotelController.getAll)
// get one 
router.get('/:id', HotelController.getByID)


module.exports = router;