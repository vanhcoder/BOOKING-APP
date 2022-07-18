const Hotel = require('../../models/Hotel');
const Room = require('../../models/Room');
const RoomController = {
    create: async function (req, res) {
        const hotelId = req.params.hotelId;
        const newRoom = new Room(req.body);
        try{
           const saveRoom =  await newRoom.save(); 
           await Hotel.findByIdAndUpdate(hotelId , {$push : {rooms:saveRoom._id}})
           res.status(200).json(saveRoom);
        }catch(err){
           res.status(500).json(err);
        }
    },
    update: async function (req, res) {
      try {
        const updateRoom = await Room.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updateRoom);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    delete: async function (req, res) {
        const  hotelId = req.params.hotelId;
      try {
        await Room.findByIdAndDelete(req.params.id);
        await Hotel.findByIdAndUpdate(hotelId , { $pull : {rooms : req.params.id}});
        res.status(200).json("delete success");
      } catch (err) {
        res.status(500).json(err);
      }
    },
    getAll: async function (req, res) {
      try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    getByID: async function (req, res) {
      try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
      } catch (err) {
        res.status(500).json(err);
      }
    }
}

module.exports = RoomController;