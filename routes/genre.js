const express = require('express')
const router = express.Router()
const genreController = require('../controllers/genreControllers')
const { authAdmin } = require('../middlewares/authorization')
const auth = require('../middlewares/authentication')

router.post('/', auth, authAdmin, genreController.create)
router.get('/', genreController.getAll)
router.put('/:id', auth, authAdmin, genreController.update)
router.delete('/:id', auth, authAdmin, genreController.delete)

module.exports = router