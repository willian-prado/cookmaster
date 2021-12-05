const usersModel = require('../../model/users');

const err = {
  isJoi: false,
  type: 'FORBIDDEN', 
  code: 403, 
  message: 'Only admins can register new admins', 
};

module.exports = async (user, loggedUser) => {
  if (loggedUser.role !== 'admin') {
    return { err };
  }

  const newUser = await usersModel.createAdmin(user);
  return newUser;
};