const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");

 const requireSignIN = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Auth Failedd",
    });
  }
};


//admin access
const isAdmin=async(req,res,next)=>{
  try {
    const user = await userModel.findById(req.user.userId);
    if (user.role !== 'admin') {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
 
module.exports = {requireSignIN,isAdmin}