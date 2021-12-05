const rescue = require('express-rescue');
const recipesService = require('../../service/recipes');

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;
  const image = `localhost:3000/src/uploads/${req.file.filename}`;
  const recipe = await recipesService.getById(id);

  const { name, ingredients, preparation } = recipe;
  const myRecipe = { name, ingredients, preparation, image };

  const updateRecipe = await recipesService.update(id, myRecipe, user);
  if (updateRecipe.err) return next(updateRecipe.err);

  return res.status(200).json(updateRecipe);
});