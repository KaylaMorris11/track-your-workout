const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes.js');
const workoutRoutes = require('./api');

router.use("/", htmlRoutes);
router.use("/api", workoutRoutes);

module.exports = router;