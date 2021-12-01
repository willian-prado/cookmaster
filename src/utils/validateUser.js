const Joi = require('joi');

const err = {
  isJoi: true,
  type: 'BAD_REQUEST', 
  code: 400, 
  message: 'Invalid entries. Try again.',
};

module.exports = (user) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.required(),
    role: Joi.string().valid('user').required(),
  }).validate(user);
  
  if (error) return err;
};