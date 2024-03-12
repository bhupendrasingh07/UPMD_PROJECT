const express = require("express");
const {
    deleteSidebarItem,
    updateSlidebarItem,
    createSidebarItem,
    allSidebarItem
} = require("../controllers/sidebarController");





const router = express.Router();

//routes
//get all Sidebar item
router.get('/all-sidebarItem',allSidebarItem);

//Create Sidebar Item/api/saveFormData
router.post('/create-sidebar',createSidebarItem);

//Update Sidebar Item
router.put('/edit-sidebarItem',updateSlidebarItem);

//delete Sidebaritem
router.delete('/delete-sidebarItem',deleteSidebarItem);


module.exports = router;