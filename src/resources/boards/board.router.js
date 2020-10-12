const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.status(200).send(boards.map(Board.toResponse));
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.get(req.params.id);
    res.status(200).send(Board.toResponse(board));
    res.json(Board.toResponse(board));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(
    new Board({
      id: req.body.id,
      title: req.body.title,
      columns: req.body.columns
    })
  );
  res.status(200).send(Board.toResponse(board));
  res.json(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  try {
    const board = await boardsService.update(req.params.id);
    board.title = req.body.title;
    res.status(200).send(Board.toResponse(board));
    res.json(Board.toResponse(board));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const boards = await boardsService.remove(req.params.id);
    res.status(200).send(boards.map(Board.toResponse));
    res.json(boards.map(Board.toResponse));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;
