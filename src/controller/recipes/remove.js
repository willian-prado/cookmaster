const rescue = require('express-rescue');
const { NO_CONTENT } = require('http-status-codes').StatusCodes;
const recipesService = require('../../service/recipes');

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;

  const remove = await recipesService.remove(id, user);

  if (remove.err) return next(remove.err);

  return res.status(NO_CONTENT).send();
}); 