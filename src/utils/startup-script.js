const { User, Dish, Rating } = require('../models');

async function startUp(){
  const newUser = {
    username: "Hughsy",
    password: "password",
    email: "kaarelinden@hotmail.com",
    dob: "1987-09-07"
  }
  const newDish = {
    name: "pizza",
    type: "italian"
  }
  const newRating = {
    rating: 5,
    comment: "Nice Food",
    UserId: 1,
    DishId: 1,
  }
  User.create(newUser)
  Dish.create(newDish)
  Rating.create(newRating)
}
startUp();