const express = require("express");

const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");

const {requireSignIN,isAdmin}= require("../middleware/authMiddleware");


const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", requireSignIN,registerController);

//LOGIN || POST
router.post("/login",requireSignIN,loginController);

//GET CURRENT USER || GET
router.get("/current-user",requireSignIN, currentUserController);

module.exports = router;