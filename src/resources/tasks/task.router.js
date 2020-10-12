const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.id);
  res.status(200).send(tasks.map(Task.toResponse));
  res.json(tasks.map(Task.toResponse));
});

router.route('/:taskId').get(async (req, res) => {
  try {
    const task = await tasksService.get(req.params.id, req.params.taskId);
    res.status(200).send(Task.toResponse(task));
    res.json(Task.toResponse(task));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(
    new Task({
      id: req.body.title,
      order: req.body.order,
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId,
      boardId: req.params.id,
      columnId: req.body.columnId
    })
  );
  res.status(200).send(Task.toResponse(task));
  res.json(Task.toResponse(task));
});

router.route('/').delete(async (req, res) => {
  try {
    const tasks = await tasksService.remove(req.params.id, req.params.taskId);
    res.status(200).send(tasks.map(Task.toResponse));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;
