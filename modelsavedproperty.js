const mongoose = require("mongoose");

const SavedPropertySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming there's a User model
    required: true,
  },
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("SavedProperty", SavedPropertySchema);