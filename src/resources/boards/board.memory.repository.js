const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllBoards();

const get = async id => {
  const board = await DB.getBoard(id);

  if (!board) {
    throw new Error(`The user with ${id} was not found`);
  } else if (board.length > 1) {
    throw new Error('DB is corrupted');
  }

  return board;
};

const create = async user => {
  return DB.createBoard(user);
};

const update = async id => {
  return DB.updateBoard(id);
};

const remove = async id => {
  const boards = await DB.removeBoard(id);
  return boards;
};

module.exports = { getAll, get, create, update, remove };
