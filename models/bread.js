const mongoose = require('mongoose')
const breadSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  allergen: [String],
})

module.exports = mongoose.model('Bread', breadSchema)
