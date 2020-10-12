const tasksRepo = require('./task.memory.repository');

const getAll = id => tasksRepo.getAll(id);

const get = (id, taskId) => tasksRepo.get(id, taskId);

const create = task => tasksRepo.create(task);

const remove = (id, taskId) => tasksRepo.remove(id, taskId);

module.exports = { getAll, get, create, remove };
