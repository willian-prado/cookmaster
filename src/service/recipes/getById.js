const recipesModel = require('../../model/recipes');

const err = {
  isJoi: false,
  type: 'NOT_FOUND', 
  code: 404, 
  message: 'recipe not found', 
};

module.exports = async (id) => {
  const recipe = await recipesModel.getById(id);

  if (!recipe) return { err };

  return recipe;
};