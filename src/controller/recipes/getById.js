const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const recipesService = require('../../service/recipes'); 

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;
  const recipe = await recipesService.getById(id);
  if (recipe.err) return next(recipe.err);
  return res.status(OK).json(recipe);
});