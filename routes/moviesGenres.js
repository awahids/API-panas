const router = require('express').Router();
const MoviesGenresControllers = require ('../controllers/moviesGenresControllers');
const { authAdmin } = require('../middlewares/authorization');
const auth = require('../middlewares/authentication');

router.post('/', auth, authAdmin, MoviesGenresControllers.create);
router.put('/:id', auth, authAdmin, MoviesGenresControllers.update);
router.delete('/:id', auth, authAdmin, MoviesGenresControllers.delete);

module.exports = router