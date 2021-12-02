const Joi = require('joi');

const err = {
  isJoi: true,
  type: 'UNAUTHORIZED', 
  code: 401, 
  message: 'All fields must be filled',
};

module.exports = (login) => {
  const { error } = Joi.object({
    email: Joi.string().required(),
    password: Joi.required(),
  }).validate(login);

  if (error) return err;
};