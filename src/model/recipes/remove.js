const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const db = await connection();
  const remove = await db.collection('recipes').deleteOne({ _id: new ObjectId(id) });
  return remove;
};