const express = require('express')
const router = express.Router()
const watchlistController = require('../controllers/watchListControllers')
const authLogin = require('../middlewares/authentication')

router.post('/:movieid', authLogin, watchlistController.addWachlist)
router.get('/', authLogin, watchlistController.getByUserId)
router.delete('/:id', authLogin, watchlistController.deleteWatchlistsById)

module.exports = router
