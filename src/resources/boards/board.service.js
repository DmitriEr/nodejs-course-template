const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const create = user => boardsRepo.create(user);

const update = id => boardsRepo.update(id);

const remove = id => boardsRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
