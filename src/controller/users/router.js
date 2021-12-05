const express = require('express');
const validateJWT = require('../../auth/validateJWT');
const create = require('./create');
const createAdmin = require('./createAdmin');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.post('/admin', validateJWT, createAdmin);

module.exports = router;