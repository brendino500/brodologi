const PORT = process.env.PORT || 5000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/brodologi'
const secret = 'Carbs are life'

module.exports = { PORT, dbURI, secret }
