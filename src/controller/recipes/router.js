const express = require('express');
const validateJWT = require('../../auth/validateJWT');
const create = require('./create');
const getAll = require('./getAll');
const getById = require('./getById');

const router = express.Router({ mergeParams: true });

router.post('/', validateJWT, create);
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;