const mongoose = require('mongoose')
const breadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
})

breadSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Bread', breadSchema)
