const express = require("express");
// const isAdmin=require('../middleware/adminMiddleware');
const {
    deleteSidebarItem,updateSlidebarItem,createSidebarItem,allSidebarItem
} = require("../controllers/sidebarController");

const {requireSignIN,isAdmin}= require("../middleware/authMiddleware");



const router = express.Router();

//routes
//get all Sidebar item
router.get('/all-sidebarItem',requireSignIN,allSidebarItem);

//Create Sidebar Item/api/saveFormData
router.post('/create-sidebar',requireSignIN,createSidebarItem);

//Update Sidebar Item
router.put('/edit-sidebarItem',requireSignIN,isAdmin,updateSlidebarItem);

//delete Sidebaritem
router.delete('/delete-sidebarItem',requireSignIN,isAdmin,deleteSidebarItem);


module.exports = router;