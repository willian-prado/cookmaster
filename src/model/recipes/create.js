const connection = require('../connection');

module.exports = async (recipe) => {
  const db = await connection();
  const newRecipe = await db.collection('recipes').insertOne(recipe);

  return {
    ...recipe,
    _id: newRecipe.insertedId,
  };
};