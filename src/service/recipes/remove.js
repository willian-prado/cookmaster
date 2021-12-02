const recipesModel = require('../../model/recipes');

const err = {
  isJoi: false,
  type: 'NOT_FOUND', 
  code: 404, 
  message: 'recipe not found', 
};

module.exports = async (id, user) => {
  const { _id: userId, role } = user;
  const recipe = await recipesModel.getById(id);
  if (!recipe) return { err }; 

  if (String(userId) !== String(recipe.userId) && role !== 'admin') {
    return { err };
  } 

  const remove = await recipesModel.remove(id);
  return remove;
};