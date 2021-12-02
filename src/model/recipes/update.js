const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id, recipe, userId) => {
  const db = await connection();
  await db.collection('recipes').updateOne(
    { _id: ObjectId(id) },
    { $set: { ...recipe, userId } },
  );
  return {
    _id: id,
    ...recipe,
    userId,
  };
};