const ratingController = require('../controllers/rating');
const express = require('express');

const ratingRouter = express.Router();

ratingRouter.post('/', ratingController.create);
ratingRouter.get('/', ratingController.read);
ratingRouter.get('/all', ratingController.readAll);
ratingRouter.get('/:id', ratingController.readOne);
ratingRouter.patch('/:id', ratingController.update);
ratingRouter.delete('/:id', ratingController.destroy);

module.exports = ratingRouter;
