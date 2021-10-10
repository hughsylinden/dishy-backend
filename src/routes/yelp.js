const yelpController = require('../controllers/yelp');
const express = require('express');

const yelpRouter = express.Router();

yelpRouter.get('/search/:location', yelpController.getRestaurantsByLocation);
yelpRouter.get('/:restaurantId', yelpController.getRestaurantById);
yelpRouter.get('/geolocation/:latitude/:longitude', yelpController.getRestaurantsByGeolocation);

module.exports = yelpRouter;
