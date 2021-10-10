const express = require('express');
const jwt = require('../utils/jwt');
const userController = require('../controllers/user');

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  );
  next();
});

userRouter.get('/all', userController.allAccess);

userRouter.get(
  '/user',
  [jwt.verifyToken],
  userController.userBoard,
);

userRouter.get(
  '/mod',
  [jwt.verifyToken, jwt.isModerator],
  userController.moderatorBoard,
);

userRouter.get(
  '/admin',
  [jwt.verifyToken, jwt.isAdmin],
  userController.adminBoard,
);

userRouter.post('/', userController.create);
userRouter.get('/', userController.read);
userRouter.get('/:id', userController.readOne);
userRouter.get('/:id/ratings', userController.readUserRatings);
userRouter.get('/:id/dishes', userController.readUserDishes);
userRouter.patch('/:id', userController.update);
userRouter.delete('/:id', userController.destroy);

module.exports = userRouter;
