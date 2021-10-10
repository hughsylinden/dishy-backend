/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const { User, Role } = require('../models');

async function signUp(req, res) {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: 'User registered successfully!' });
          });
        });
      } else {
        user.setRoles([1]).then(() => {
          res.send({ message: 'User registered successfully!' });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
}

async function signIn(req, res) {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'User Not found.' });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password,
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        });
      }

      const token = jwt.sign({ id: user.id }, 'asd', {
        expiresIn: 86400, // 24 hours
      });

      const authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i = +1) {
          authorities.push(`ROLE_${roles[i].name.toUpperCase()}`);
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
}

module.exports = { signIn, signUp };
