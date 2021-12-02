const express = require('express');
const validateJWT = require('../../auth/validateJWT');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', validateJWT, create);

module.exports = router;