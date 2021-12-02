const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const recipe = await db.collection('recipes').findOne(new ObjectId(id));
  
  if (!recipe) return null;
  return recipe;
};