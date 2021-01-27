const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Bread = require('../models/bread')
const breadsData = require('./data/breadsData')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },

  async (err, db) => {
    if (err) {
      console.log(err)
      return
    }

    try {
      await db.connection.dropDatabase()
      console.log('Database dropped')

      const bread = await Bread.create(breadsData)
      console.log(`${'🇳🇴'.repeat(bread.length)} items created`)

      await mongoose.connection.close()
      console.log('Goodbye 👍')
    } catch (err) {
      await mongoose.connection.close()
      console.log(err)
    }
  }
)
