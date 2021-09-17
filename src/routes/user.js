const userController = require('../controllers/user');
const express = require('express');

const userRouter = express.Router();

userRouter.post('/', userController.create);
userRouter.get('/', userController.read);
userRouter.get('/:id', userController.readOne);
userRouter.get('/:id/ratings', userController.readUserRatings);
userRouter.get('/:id/dishes', userController.readUserDishes);
userRouter.patch('/:id', userController.update);
userRouter.delete('/:id', userController.destroy);

module.exports = userRouter;
