const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
  title: String,
  price: Number,
  location: String,
  type: String, // e.g., house, apartment
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Listing", ListingSchema);
