const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dish');
const restaurantRouter = require('./routes/restaurant');
const userRouter = require('./routes/user');
const ratingRouter = require('./routes/rating');
const yelpRouter = require('./routes/yelp');
const authRouter = require('./routes/auth');
//const { Role } = require('./models');
const cors = require('cors')

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(cors())

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/dish', dishRouter);
app.use('/restaurant', restaurantRouter);
app.use('/user', userRouter);
app.use('/rating', ratingRouter);
app.use('/restaurants', yelpRouter);
app.use('/auth', authRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* async function initial() {
  Role.create({
    name: 'user',
  });

  Role.create({
    name: 'moderator',
  });

  Role.create({
    name: 'admin',
  });
}

initial();  */


module.exports = app;
