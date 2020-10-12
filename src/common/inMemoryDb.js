const DB = {
  Users: [],
  Boards: [],
  Tasks: []
};

const getAllUsers = async () => {
  return DB.Users.slice(0);
};

const getAllBoards = async () => {
  return DB.Boards.slice(0);
};

const getAllTasks = async id => {
  return DB.Tasks.filter(el => el.boardId === id);
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
  DB.Tasks.map(task => {
    return id !== task.userId ? { ...test, userId: null } : task;
  });
  return await DB.Users.filter(el => el.id !== id);
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
  return DB.Boards.filter(el => el.id !== id);
};

const getTask = async (id, taskId) => {
  const task = DB.Tasks.filter(el => el.boardId === id);
  return task.filter(el => el.id === taskId)[0];
};

const createTask = async task => {
  DB.Tasks.push(task);
  return task;
};

const removeTask = async (id, taskId) => {
  const tasks = DB.Tasks.filter(el => el.id === id);
  return tasks.filter(el => el.id !== taskId);
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
  removeBoard,
  getAllTasks,
  getTask,
  createTask,
  removeTask
};
