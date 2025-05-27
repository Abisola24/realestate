const express = require("express");
const router = express.Router();
const SavedProperty = require("../models/SavedProperty");

// Middleware: get userId from auth (stubbed here)
const getUserId = (req) => req.header("userId"); // Simulate user auth

// SAVE a property
router.post("/save/:propertyId", async (req, res) => {
  const userId = getUserId(req);
  const propertyId = req.params.propertyId;

  const alreadySaved = await SavedProperty.findOne({ userId, propertyId });
  if (alreadySaved) {
    return res.status(400).json({ message: "Already saved" });
  }

  const saved = await SavedProperty.create({ userId, propertyId });
  res.status(201).json(saved);
});

// UNSAVE a property
router.delete("/unsave/:propertyId", async (req, res) => {
  const userId = getUserId(req);
  const propertyId = req.params.propertyId;

  const result = await SavedProperty.findOneAndDelete({ userId, propertyId });
  if (!result) return res.status(404).json({ message: "Not found in saved list" });

  res.json({ message: "Property unsaved" });
});

// GET all saved properties for a user
router.get("/", async (req, res) => {
  const userId = getUserId(req);
  const savedProperties = await SavedProperty.find({ userId }).populate("propertyId");
  res.json(savedProperties.map((item) => item.propertyId));
});

module.exports = router;
🚀 6. Main App Setup (app.js)
js
Copy
Edit
const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();
app.use(express.json());

// Routes
app.use("/api/properties", require("./routes/propertyRoutes"));
app.use("/api/saved", require("./routes/savedPropertyRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
