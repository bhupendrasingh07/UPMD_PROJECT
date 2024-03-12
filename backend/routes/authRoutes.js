const express = require("express");

const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");

const {requireSignIn,isAdmin}= require("../middleware/authMiddleware");


const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login",loginController);

//GET CURRENT USER || GET
router.get("/current-user", requireSignIN,currentUserController);

module.exports = router;