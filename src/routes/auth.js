const express = require('express');
const authController = require('../controllers/auth');
const signup = require('../utils/signup');

const authRouter = express.Router();

authRouter.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  );
  next();
});

authRouter.post(
  '/signup',
  [
    signup.checkDuplicateUsernameOrEmail,
    signup.checkRolesExisted,
  ],
  authController.signUp,
);

authRouter.post('/signin', authController.signIn);

module.exports = authRouter;
