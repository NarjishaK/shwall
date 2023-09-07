const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  meterial: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  productid: { type: Number, required: true },
  description: { type: String, required: true },
  image: [{ type: String, required: true }],
});

const Addlist = mongoose.model("Addlist", productSchema);
module.exports = Addlist;
