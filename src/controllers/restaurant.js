const { Restaurant } = require('../models');
const errorHandler = require('../utils/errorHandler')

async function create(req, res) {
  const data = req.body;
  Restaurant
  .findOrCreate({where: {
    yelp_id: data.yelp_id, 
    longitude: data.longitude, 
    latitude: data.latitude, 
    name:data.name, 
    address1:data.address1,  
    address2:data.address2 ,
    city:data.city ,
    zip_code:data.zip_code  }
  })
  .then((obj) => {
    res.status(201).json(obj)
  })
  .catch((error) => {
    errorHandler(res,error)
  });
}

async function read(req, res) {
  Restaurant.findAll().then((items) => {
    res.status(200).json(items);
  });
}

async function readOne(req, res) {
  Restaurant
  .findByPk(req.params.id, { })
  .then((obj) => {
    if (!obj) {
      res
      .status(404)
      .json({ error: `The ${Restaurant.name.toLowerCase()} could not be found.` })
    } else {
      res.status(200).json(obj.dataValues);
    }
  })
  .catch((error) =>
    errorHandler(res,error)
  );
}

async function update(req, res) {
  Restaurant
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
        .json({ error: `The ${Restaurant.name.toLowerCase()} could not be found.` })
    );
}

async function destroy(req, res) {
  Restaurant
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
      .json({ error: `The ${Restaurant.name.toLowerCase()} could not be found.` })
  );
}

/*
async function readAll(req, res) {
  Restaurant.findAll().then((items) => {
    res.status(200).json(items);
  });
} 

async function readByYelpId(req, res) {
  Restaurant
  .findOne({where:{yelp_id: req.params.yelpId} })
  .then((obj) => {
    if (!obj) {
      res
      .status(404)
      .json({ error: `The ${Restaurant.name.toLowerCase()} could not be found.` })
    } else {
      res.status(200).json(obj);
    }
  })
  .catch((error) =>
    errorHandler(res,error)
  );
}

async function readRestaurantRatings(req, res) {
  Restaurant
  .findByPk(req.params.id, { include: Rating })
  .then((obj) => {
    if (!obj) {
      res
      .status(404)
      .json({ error: `The ${Restaurant.name.toLowerCase()} could not be found.` })
    } else {
      res.status(200).json(obj.dataValues);
    }
  })
  .catch((error) =>
    errorHandler(res,error)
  );
}
*/

module.exports = { create, read, readOne, update, destroy };
