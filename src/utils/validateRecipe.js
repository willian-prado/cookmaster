const Joi = require('joi');

const err = {
  isJoi: true,
  type: 'BAD_REQUEST', 
  code: 400, 
  message: 'Invalid entries. Try again.',
};

module.exports = (recipe) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    ingredients: Joi.string().required(),
    preparation: Joi.string().required(),
  }).validate(recipe);

  if (error) return err;
};