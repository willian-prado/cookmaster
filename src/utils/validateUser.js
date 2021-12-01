const Joi = require('joi');

module.exports = (user) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.required(),
    role: Joi.string().valid('user').required(),
  }).validate(user);

  return error;
};