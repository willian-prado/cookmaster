const connection = require('../connection');

module.exports = async (userObject) => {
  const { name, email, role } = userObject;
  const db = await connection();
  const user = await db.collection('users').insertOne(userObject);
  
  return {
    name,
    email,
    role,
    _id: user.insertedId,
  };
};