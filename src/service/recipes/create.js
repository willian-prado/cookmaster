const recipesModel = require('../../model/recipes');

module.exports = async (recipe) => {
  const newRecipe = await recipesModel.create(recipe);

  return newRecipe;
};