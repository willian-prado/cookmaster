const rescue = require('express-rescue');
const { CREATED } = require('http-status-codes').StatusCodes;
const validateUser = require('../../utils/validateUser');
const usersService = require('../../service/users');

module.exports = rescue(async (req, res, next) => {
  const { name, email, password, role = 'admin' } = req.body;
  
  const error = validateUser({ name, email, password, role }, 'admin');
  if (error) return next(error);

  const user = { name, email, password, role };
  const loggedUser = req.user;

  const newUser = await usersService.createAdmin(user, loggedUser);
  if (newUser.err) return next(newUser.err);

  return res.status(CREATED).json({ user: newUser });
});