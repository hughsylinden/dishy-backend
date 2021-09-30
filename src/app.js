const express = require('express');
const dishRouter = require('./routes/dish');
const restaurantRouter = require('./routes/restaurant');
const userRouter = require('./routes/user');
const ratingRouter = require('./routes/rating');
const fetch = require("node-fetch");
const cors = require('cors')

const TOKEN = process.env.TOKEN;
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(cors())

app.use(express.json());

app.use('/dish', dishRouter);
app.use('/restaurant', restaurantRouter);
app.use('/user', userRouter);
app.use('/rating', ratingRouter);

app.get('/restaurants/search/:location', async (req, res) => {
  const location = req.params.location;
  try{
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?radius=2000&location=${location}&term=restaurants`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const yelpData = await response.json();
    res.status(200).json(yelpData);

  } catch (err) {
    res.sendStatus(500)
  }
});

app.get('/restaurant/:restaurantId', async (req, res) => {
  const restaurantId = req.params.restaurantId;
  try{
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/${restaurantId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const yelpData = await response.json();
    res.status(200).json(yelpData);

  } catch (err) {
    res.sendStatus(500)
  }
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;
