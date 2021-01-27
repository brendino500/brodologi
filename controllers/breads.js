const { notFound, error } = require('../lib/errorMessage')
const Bread = require('../models/bread')

async function breadsIndex(req, res, next) {
  try {
    const breads = await Bread.find()
    if (!breads) throw new Error(error)
    res.status(200).json(breads)
  } catch (err) {
    next(err)
  }
}

async function breadShow(req, res, next) {
  try {
    const bread = await Bread.findById(req.params.id).populate('user')
    if (!bread) throw new Error(notFound)
    res.status(200).json(bread)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  index: breadsIndex,
  show: breadShow,
}
