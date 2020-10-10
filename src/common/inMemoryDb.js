const User = require('../resources/users/user.model');

const DB = [];

DB.push(new User(), new User(), new User());

const getAllUsers = async () => {
  return DB.slice(0);
};

const getUser = async id => {
  return DB.filter(el => el.id === id)[0];
};

const createUser = async user => {
  DB.push(user);
  return user;
};

const updateUser = async id => {
  const user = DB.filter(el => el.id === id)[0];
  user.name = 'Autotest updated TEST_USER';
  return user;
};

module.exports = { getAllUsers, getUser, createUser, updateUser };
