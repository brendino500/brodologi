const router = require('express').Router()
const breads = require('../controllers/breads')

router.route('/breads').get(breads.index)

module.exports = router
