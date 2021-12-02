const jwt = require('jsonwebtoken');
const userModel = require('../model/users');

const err = {
  isJoi: false,
  type: 'UNAUTHORIZED', 
  code: 401, 
  message: 'Incorrect username or password',
};

const secret = 'minhasecretkey';

module.exports = async (login) => {
  const user = await userModel.getByEmail(login.email);

  if (!user || login.password !== user.password) return { err };

  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

  const { _id: id, email, role } = user;

  const payload = { id, email, role };
  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};