const DB = require('../../common/inMemoryDb');

const getAll = async id => DB.getAllTasks(id);

const get = async (id, taskId) => DB.getTask(id, taskId);

const create = async task => DB.createTask(task);

const remove = async (id, taskId) => DB.removeTask(id, taskId);

module.exports = { getAll, get, create, remove };
