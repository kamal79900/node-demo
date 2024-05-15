const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const { firstname, lastname, mobileno, role, email } = req.body;
    const user = await User.create({
      firstname,
      lastname,
      email,
      mobileno,
      role,
    });
    if (user) {
      return res.json({ data: user, status: true });
    }
    return res.json({ message: user, status: false });
  } catch (error) {
    return res.json({ message: error, status: false });
  }
};

const getAllUser = async (req, res) => {
  try {
    const userList = await User.find({});
    res.json({ data: userList, status: true });
  } catch (error) {
    return res.json({ message: error, status: false });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.id;
    const userList = await User.findById({ _id: userId });
    if (userList) {
      return res.json({ data: userList, status: true });
    } else {
      return res.json({ data: userList, status: false });
    }
  } catch (error) {
    return res.json({ message: error, status: false });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { firstname, lastname, mobileno, role, email } = req.body;
    if (!firstname || !lastname || !mobileno || !role || !email) {
      return res.json({ message: "All fields are required!", status: false });
    }
    const userList = await User.findByIdAndUpdate(
      { _id: userId },
      { firstname, lastname, mobileno, email, role }
    );
    if (userList != null) {
      return res.json({ data: userList, status: true });
    } else {
      return res.json({ data: userList, status: false });
    }
  } catch (error) {
    return res.json({ message: error, status: false });
  }
};

const deleteUser = async (req, res) => {
  try {
    const Id = req.params.id;
    const user = await User.findByIdAndDelete({ _id: Id });
    if (user) {
      return res.json({ data: user, status: true });
    } else {
      return res.json({ data: user, status: false });
    }
  } catch (error) {
    return res.json({ message: error, status: false });
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUserDetails,
  updateUser,
  deleteUser,
};
