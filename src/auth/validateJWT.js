const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const userModel = require('../model/users');

const secret = 'minhasecretkey';

const err = {
  isJoi: false,
  type: 'UNAUTHORIZED', 
  code: 401,
  message: 'jwt malformed',
};

module.exports = rescue(async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(err.code).json({ message: 'missing auth token' });

  try {
    const decoded = jwt.verify(token, secret);
    const user = await userModel.getByEmail(decoded.email);
    if (!user) return next(err);
    req.user = user;
    next();
  } catch (e) {
    next(err); 
  }
});