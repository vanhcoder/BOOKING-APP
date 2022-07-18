
const Hotel = require('../../models/Hotel');

const HotelController = {
  create: async function (req, res) {
    const newHotel = new Hotel(req.body);
    try {
      const saveHotel = await newHotel.save();
      res.status(200).json(saveHotel);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  update: async function (req, res) {
    try {
      const updateHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateHotel);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  delete: async function (req, res) {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json("delete success");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAll: async function (req, res) {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getByID: async function (req, res) {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

module.exports = HotelController;