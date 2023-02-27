const express = require("express");
const router = express.Router();
const {
  setAdmin,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/adminController");


router.post("/create", setAdmin);
router.get("/getAll", getAdmins);
router.get("/getById/:id", getAdminById);
router.put("/updateAdmin/:id", updateAdmin);
router.delete("/deleteAdmin/:id", deleteAdmin);

module.exports = router;
