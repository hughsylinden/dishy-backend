const express = require('express');
const dishRouter = require('./routes/dish');
const restaurantRouter = require('./routes/restaurant');
const userRouter = require('./routes/user');
const ratingRouter = require('./routes/rating');
const cors = require('cors')


const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use(cors())

app.use(express.json());

app.use('/dish', dishRouter);
app.use('/restaurant', restaurantRouter);
app.use('/user', userRouter);
app.use('/rating', ratingRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;
