const multer = require('multer');
const recipesService = require('../service/recipes');

const storage = multer.diskStorage({
  destination: async (req, file, callback) => {
    const { id } = req.params;

    const recipe = await recipesService.getById(id);
    if (!recipe) callback(Error('Invalid id'), '');

    callback(null, 'src/uploads/');
  },
  filename: (req, file, callback) => {
    const { id } = req.params;
    const newName = `${id}.jpeg`;
    callback(null, newName);
  },
});

module.exports = multer({ storage });