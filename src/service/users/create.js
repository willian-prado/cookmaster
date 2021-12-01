const usersModel = require('../../model/users');

const err = {
  type: 'CONFLICT', 
  code: 409, 
  message: 'Email already registered', 
};

module.exports = async (user) => {
  const getUser = await usersModel.getByEmail(user.email);

  if (getUser) return { err };

  const newUser = await usersModel.create(user);
  return newUser;
};