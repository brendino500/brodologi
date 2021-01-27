const port = process.env.PORT || 5050
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/brodologi'

module.exports = { port, dbURI }
