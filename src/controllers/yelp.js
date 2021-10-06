const TOKEN = "ovzH6flq_E7L-ALjU2hkTjMCqYa94jqra33tZrYHN10g89DbCA9SDnNSiKQkLhEqiPUKdf36q99wvUZ0DptKWa_WVkp2BAA_rA5QE_uIpdDLyeeZOxbIewjOml06YXYx";

const fetch = require("node-fetch");

async function getRestaurantById (req, res){
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
}

async function getRestaurantsByGeolocation(req, res){
  const {latitude,longitude} = req.params;
  try{
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?radius=600&latitude=${latitude}&longitude=${longitude}`, {
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
}

async function getRestaurantsByLocation(req, res) {
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
}


module.exports = { getRestaurantById, getRestaurantsByGeolocation, getRestaurantsByLocation };
