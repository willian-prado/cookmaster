const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id, recipe, userId) => {
  const { image, name, ingredients, preparation } = recipe;

  const db = await connection();
  await db.collection('recipes').updateOne(
    { _id: ObjectId(id) },
    { $set: { ...recipe, userId } },
  );

  if (!image) return { _id: id, ...recipe, userId };

  return { _id: id, name, ingredients, preparation, userId, image };
};