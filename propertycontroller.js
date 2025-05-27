const Property = require('../models/Property')

exports.addProperty = async (req, res) => {
  const { title, description, price, location } = req.body
  const property = new Property({
    title, description, price, location, createdBy: req.user._id
  })
  await property.save()
  res.status(201).json(property)
}