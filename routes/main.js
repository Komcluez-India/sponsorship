const express = require('express');
const router = express.Router();

const { home, lGwalior, lSamvedna } = require('../controllers/main');

router.route('/').get(home);
router.route('/fundraisers/school-development-light-gwalior').get(lGwalior);
router.route('/fundraisers/school-uniforms-for-orphanage').get(lSamvedna);

module.exports = router;