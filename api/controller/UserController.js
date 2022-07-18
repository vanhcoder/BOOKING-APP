
const User = require('../../models/User');
const UserController = {
  update: async function (req, res) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  delete: async function (req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("delete success");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAll: async function (req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getByID: async function (req, res) {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = UserController;