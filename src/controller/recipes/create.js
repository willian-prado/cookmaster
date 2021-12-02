const rescue = require('express-rescue');
const { CREATED } = require('http-status-codes').StatusCodes;
const validateRecipe = require('../../utils/validateRecipe');
const recipesService = require('../../service/recipes');

module.exports = rescue(async (req, res, next) => {
  const { name, ingredients, preparation } = req.body;
  const { _id: userId } = req.user;
  const recipe = { name, ingredients, preparation, userId };

  const error = validateRecipe({ name, ingredients, preparation });
  if (error) return next(error);

  const newRecipe = await recipesService.create(recipe);
  return res.status(CREATED).json({ recipe: newRecipe });
});