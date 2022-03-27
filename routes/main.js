const express = require('express');
const router = express.Router();

const { home, lGwalior } = require('../controllers/main');

router.route('/').get(home);
router.route('/fundraisers/school-development-light-gwalior').get(lGwalior);

module.exports = router;