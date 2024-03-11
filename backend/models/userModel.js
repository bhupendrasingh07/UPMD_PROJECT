const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Enter your first name"],
      trim:true
    },
    lname: {
      type: String,
      required:[true,"Enter your last name"],
      trim:true
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim:true
    },
    password: {
      type: String,
      required: [true, "password is requied"],
      trim:true
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
      trim:true,
      min:4,
      max:10
    },
    aboutus:{
      type:String,
    },
    role: {
      type:String,
      default:'user',
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);