const mongoose = require("mongoose");

const { Schema } = mongoose;

const userschema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
      type:String,
  },
  phone:Number
});
module.exports = User = mongoose.model("User", userschema);
