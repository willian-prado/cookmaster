const connection = require('../connection');

module.exports = async (user) => {
  const { name, email, role } = user;
  const db = await connection();
  const newUser = await db.collection('users').insertOne(user);

  return {
    name,
    email,
    role,
    _id: newUser.insertedId,
  };
};