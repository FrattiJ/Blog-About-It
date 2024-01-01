const express = require('express');
const router = express.Router();
const getPosts = require('../utils/getPosts.js');

router.get('/', getPosts.renderMainView);

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;