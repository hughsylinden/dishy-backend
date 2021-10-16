const dishController = require('../controllers/dish');
const express = require('express');
const dishRouter = express.Router();

dishRouter.post('/', dishController.create);
dishRouter.get('/', dishController.read);
dishRouter.get('/:id', dishController.readOne);
dishRouter.patch('/:id', dishController.update);
dishRouter.delete('/:id', dishController.destroy);


//dishRouter.get('/:id/ratings', dishController.readDishRatings);
//dishRouter.get('/all', dishController.readDishes);
module.exports = dishRouter;