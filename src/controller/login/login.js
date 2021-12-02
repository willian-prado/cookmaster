const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const validateLogin = require('../../utils/validateLogin');
const createToken = require('../../utils/createToken');

module.exports = rescue(async (req, res, next) => {
  const { email, password } = req.body;

  const error = validateLogin({ email, password });
  if (error) return next(error);

  const token = await createToken({ email, password });
  if (token.err) return next(token.err);

  res.status(OK).json({ token });
});