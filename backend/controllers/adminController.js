const Admin = require("../models/adminModel");

//get all
const getAdmins = async (req, res) => {
  const admin = await Admin.find();

  res.status(200).json(admin);
};

//get by id
const getAdminById = async (req, res) => {
  const admin = await Admin.findById(req.params.id);

  if (!admin) {
    res.status(400);
    throw new Error("can't find Admin");
  }

  res.status(200).json(admin);
};

//create bug
const setAdmin = async (req, res) => {
  if (!req.body) {
    res.status(400).json("Please enter a admin info");
  }

  const admin = await Admin.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    discription: req.body.discription,

  });

  res.status(200).json(admin);
};

//update
const updateAdmin = async (req, res) => {
  const admin = await Admin.findById(req.params.id);

  if (!admin) {
    res.status(400);
    throw new Error("can't find Admin");
  }

  const updateAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateAdmin);
};

//delete by id
const deleteAdmin = async (req, res) => {
  const admin = await Admin.findById(req.params.id);

  if (!admin) {
    res.status(400);
    throw new Error("can't find Admin");
  }

  await admin.remove();

  res.status(200).json({ id: req.params.id });
};

module.exports = {
  setAdmin,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};
