const Bread = require('../models/bread')

async function breadsIndex(req, res, next) {
  try {
    const breads = await Bread.find()
    if (!breads) throw new Error('notFound')
    res.status(200).json(breads)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  index: breadsIndex,
}
