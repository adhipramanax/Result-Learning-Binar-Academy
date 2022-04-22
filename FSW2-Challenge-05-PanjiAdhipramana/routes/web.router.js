const express = require('express');
const { index } = require('../controllers/web/index.controller');
const { create } = require('../controllers/web/create.controller');
const { update } = require('../controllers/web/update.controller');
const router = express.Router();

router.get('/', index);

router.get('/create', create);

router.get('/update', update);

module.exports = router;
