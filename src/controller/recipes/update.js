const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const recipesService = require('../../service/recipes');
const validateRecipe = require('../../utils/validateRecipe');

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;
  const { user } = req;
  const myRecipe = { name, ingredients, preparation };

  const error = validateRecipe(myRecipe);
  if (error) return next(error);
  
  const updatedRecipe = await recipesService.update(id, myRecipe, user);
  if (updatedRecipe.err) return next(updatedRecipe.err);
  return res.status(OK).json(updatedRecipe);
});