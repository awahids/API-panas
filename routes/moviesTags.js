const router = require('express').Router();
const MoviesTagsControllers = require ('../controllers/moviesTagsControllers.js');
const { authAdmin } = require('../middlewares/authorization');
const auth = require('../middlewares/authentication');

router.post('/',  auth, authAdmin, MoviesTagsControllers.create);
router.put('/:id', auth, authAdmin, MoviesTagsControllers.update);
router.delete('/:id', auth, authAdmin, MoviesTagsControllers.delete);

module.exports = router