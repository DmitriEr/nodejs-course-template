const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  try {
    const tasks = await tasksService.getAll();
    res.status(200).send(tasks.map(Task.toResponse));
    res.json(tasks.map(Task.toResponse));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;
