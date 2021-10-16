const { Rating, Dish, Restaurant, User } = require('../models');
const errorHandler = require('../utils/errorHandler')

async function create(req, res) {
  const data = req.body;
  
  const obj = await Rating.findOne({where: { DishId:data.DishId, UserId: data.UserId,  RestaurantId: data.RestaurantId }})

  if(!obj){
    Rating
    .create(data) 
    .then((obj) => res.status(201).json(obj.dataValues))
    .catch((error) => {
      console.log(error)
    })
    }
    else{
      Rating
      .update({rating: data.rating}, {
        where: {id: obj.dataValues.id}
      }) 
      .then((obj) => res.status(201).json(obj.dataValues))
      .catch((error) => {
        console.log(error)
      })
    }
  }

async function searchRating(req, res) {
  const query = req.body.query;
  Rating
    .findAll({
      include: [
        {
          model: Restaurant,
          required: true
        },
        {
          model: Dish,
          where: {name:query}
        },
        {
          model: User,
          required: true
        }
      ]
    }) 
    .then((ratings) => {
      const array = [];
      ratings.forEach((data) => {
        let obj = {};
        if (
          !array
            .map((restaurant) => restaurant.name)
            .includes(data.Restaurant.name)
        ) {
          obj = {
            user: data.User.id,
            dish: data.Dish.name,
            name: data.Restaurant.name,
            coordinates: {
              latitude: data.Restaurant.latitude,
              longitude: data.Restaurant.longitude,
            },
            address: {
              address1: data.Restaurant.address1,
              address2: data.Restaurant.address2,
              city: data.Restaurant.city,
              zip_code: data.Restaurant.zip_code,
            },
            comment: data.comment,
            scores: [data.rating],
            users: [data.User.id]
          };
          array.push(obj);
        } else {
          const index = array.findIndex((i) => i.name === data.Restaurant.name);
          array[index].scores.push(data.rating);
          array[index].users.push(data.User.id);
        }
      });
      res.status(201).json(array)
    })
    .catch((error) => {
      errorHandler(res,error)
    }); 
}

async function read(req, res) {
  Rating.findAll().then((items) => {
    res.status(200).json(items);
  });
}

async function readAll(req, res) {
  Rating.findAll({include: [Dish, Restaurant]}).then((items) => {
    res.status(200).json(items);
  });
}

async function readOne(req, res) {
  Rating
  .findByPk(req.params.id, { })
  .then((obj) => {
    if (!obj) {
      res
      .status(404)
      .json({ error: `The ${Rating.name.toLowerCase()} could not be found.` })
    } else {
      res.status(200).json(obj.dataValues);
    }
  })
  .catch((error) =>
    res
      .status(500)
      .json(error)
  );
}

async function update(req, res) {
  Rating
    .update(req.body, { where: { id: req.params.id } })
    .then((updatedRows) => {
      if (updatedRows == 0) {
        throw Error;
      } else {
        res.status(200).json(`Number of updated rows: ${updatedRows}`);
      }
    })
    .catch(() =>
      res
        .status(404)
        .json({ error: `The ${Rating.name.toLowerCase()} could not be found.` })
    );
}

async function destroy(req, res) {
  Rating
  .destroy({ where: { id: req.params.id } })
  .then((deletedRows) => {
    if (!deletedRows) {
      throw Error;
    } else {
      res.status(204).json(`Number of deleted rows: ${deletedRows}`);
    }
  })
  .catch(() =>
    res
      .status(404)
      .json({ error: `The ${Rating.name.toLowerCase()} could not be found.` })
  );
}

module.exports = { create, read, readOne, update, destroy, readAll, searchRating };
