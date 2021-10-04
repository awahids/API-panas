const router = require('express').Router();
const movieCast = require ('../controllers/movieCastControllers');
const { authAdmin } = require('../middlewares/authorization');
const auth = require('../middlewares/authentication');

router.post('/', auth, authAdmin, movieCast.postMovieCast);
router.put('/:id', auth, authAdmin, movieCast.movieCastUpdate);
router.delete('/:id', auth, authAdmin, movieCast.movieCastDelete);


module.exports = router;