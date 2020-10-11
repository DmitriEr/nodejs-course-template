const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  try {
    const boards = await boardsService.getAll();
    res.status(200).send(boards.map(Board.toResponse));
    res.json(boards.map(Board.toResponse));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;
