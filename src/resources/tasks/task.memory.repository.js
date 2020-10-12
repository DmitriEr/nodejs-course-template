const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllTasks();

module.exports = { getAll };
