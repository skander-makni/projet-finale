const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productschema = new Schema({
  name: String,
  category: String,
  description: String,
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
});
module.exports = Product = model("Product", productschema);
