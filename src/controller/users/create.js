const rescue = require('express-rescue');
const { CREATED } = require('http-status-codes').StatusCodes;
const usersService = require('../../service/users');
const validateUser = require('../../utils/validateUser');

module.exports = rescue(async (req, res, next) => {
  const { name, email, password, role = 'user' } = req.body;
  
  const error = validateUser({ name, email, password, role });
  if (error) {
    return next(error);
  }

  const user = { name, email, password, role };

  const newUser = await usersService.create(user);
  if (newUser.err) return next(newUser.err);
  return res.status(CREATED).json({ user: newUser });
});