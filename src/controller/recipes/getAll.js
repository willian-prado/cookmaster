const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const recipesService = require('../../service/recipes');

module.exports = rescue(async (_req, res, _next) => {
  const recipes = await recipesService.getAll();
  return res.status(OK).json(recipes);
});