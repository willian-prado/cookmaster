const express = require('express');
const validateJWT = require('../../auth/validateJWT');
const controllers = require('.');
const uploadMid = require('../../middlewares/upload');

const router = express.Router({ mergeParams: true });

router.post('/', validateJWT, controllers.create);
router.get('/', controllers.getAll);
router.put('/:id/image', validateJWT, uploadMid.single('image'), controllers.upload);
router.get('/:id', controllers.getById);
router.put('/:id', validateJWT, controllers.update);
router.delete('/:id', validateJWT, controllers.remove);

module.exports = router;