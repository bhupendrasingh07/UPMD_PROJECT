const express = require("express")
const authMiddelware = require("../middleware/authMiddleware");
// const isAdmin=require('../middleware/adminMiddleware');
const { getAllUser } = require("../controllers/adminController");

const router = express.Router();

//GET || USER
// router.get('/user-list',requireSignIN,isAdmin,getAllUser)


module.exports = router