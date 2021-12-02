const recipesModel = require('../../model/recipes');

const err = {
  isJoi: false,
  type: 'NOT_FOUND', 
  code: 404, 
  message: 'recipe not found', 
};

module.exports = async (id, recipe, user) => {
  const { _id: userId, role } = user;
  const oldRecipe = await recipesModel.getById(id);
  if (!oldRecipe) return { err };

  if (String(userId) !== String(oldRecipe.userId) && role !== 'admin') {
    return { err };
  } 
  
  const updatedRecipe = await recipesModel.update(id, recipe, oldRecipe.userId);
  return updatedRecipe;
};