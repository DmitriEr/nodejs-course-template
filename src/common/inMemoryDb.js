const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');

const DB = {
  Users: [],
  Boards: []
};

DB.Users.push(new User(), new User(), new User());

const getAllUsers = async () => {
  return DB.Users.slice(0);
};

const getUser = async id => {
  return DB.Users.filter(el => el.id === id)[0];
};

const createUser = async user => {
  DB.Users.push(user);
  return user;
};

const updateUser = async id => {
  return DB.Users.filter(el => el.id === id)[0];
};

const removeUser = async id => {
  return DB.Users.filter(el => el.id !== id);
};

// boards

DB.Boards.push(new Board(), new Board(), new Board());

const getAllBoards = async () => {
  return DB.Boards;
};

const getBoard = async id => {
  return DB.Boards.filter(el => el.id === id)[0];
};

const createBoard = async board => {
  DB.Boards.push(board);
  return board;
};

const updateBoard = async id => {
  return DB.Boards.filter(el => el.id === id)[0];
};

const removeBoard = async id => {
  return await DB.Boards.filter(el => el.id !== id);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard
};
