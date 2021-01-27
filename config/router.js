const router = require('express').Router()
const breads = require('../controllers/breads')

router.route('/breads').get(breads.index)

router.route('/breads/:id').get(breads.show)

module.exports = router
