const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllUsers();

const get = async id => {
  const user = await DB.getUser(id);

  if (!user) {
    throw new Error(`The user with ${id} was not found`);
  } else if (user.length > 1) {
    throw new Error('DB is corrupted');
  }

  return user;
};

const create = async user => {
  return DB.createUser(user);
};

const update = async id => {
  return DB.updateUser(id);
};

module.exports = { getAll, get, create, update };
