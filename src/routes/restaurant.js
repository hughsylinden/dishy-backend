const restaurantController = require('../controllers/restaurant');
const express = require('express');

const restaurantRouter = express.Router();

restaurantRouter.post('/', restaurantController.create);
restaurantRouter.get('/', restaurantController.read);
restaurantRouter.get('/list', restaurantController.readAll);
restaurantRouter.get('/query/:yelpId', restaurantController.readByYelpId);
restaurantRouter.get('/:id', restaurantController.readOne);
restaurantRouter.get('/:id/ratings', restaurantController.readRestaurantRatings);
restaurantRouter.patch('/:id', restaurantController.update);
restaurantRouter.delete('/:id', restaurantController.destroy);

module.exports = restaurantRouter;
