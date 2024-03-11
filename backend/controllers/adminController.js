const userModel=require('../models/userModel')

const getAllUser=async(req,res)=>{
    try {
     const allUser=await userModel.find()
     res.status(200).send({
        success:true,
        totalUser:allUser.length,
        message:"Get All User Successfully",
        allUser
     })
        
    } 
    catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error In User List API",
            error,
    })
}
}
module.exports={getAllUser}