const router = require('express').Router();
const apiRoutes = require('./api-route');
const homeRoutes = require('./index-route');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;