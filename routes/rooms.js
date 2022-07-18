const express = require('express');
const RoomController = require('../api/controller/RoomController');
const router = express.Router();

router.post('/:hotelId', RoomController.create)
// update
router.put('/:id', RoomController.update)
// delete
 router.delete('/:id/:hotelId', RoomController.delete)
// get all
router.get('/', RoomController.getAll)
// get one 
router.get('/:id', RoomController.getByID)

module.exports = router;