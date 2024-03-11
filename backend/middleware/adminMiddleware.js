const userModel=require('../models/userModel')

const isAdmin = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.body.userId);
      //check admin
      if (user?.role !== "admin") {
        return res.status(401).send({
          success: false,
          message: "Only Admin Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
        errro,
      });
    }
  };
  module.exports =isAdmin