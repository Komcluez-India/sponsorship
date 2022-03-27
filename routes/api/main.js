const express = require('express');
const cors = require('cors');
const router = express.Router();

const { index, fundraiserStats } = require('../../controllers/api/main');
// const kmcRoutes = require('./kmc')

router.route('/').get(index);
router.route('/get-fundraiser-stats/:fundraiser').get(fundraiserStats);

// router.use('/kmc', cors(), kmcRoutes);
// router.route('/projects').post(projects);


module.exports = router;