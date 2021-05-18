const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboard-routes');
const apiRoutes = require('./api');
const { route } = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;