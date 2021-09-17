
const restaurantFile = require('./restaurantData.json')
const axios = require('axios')

const addRestaurants = () => {}
restaurantFile.forEach(line => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/restaurant',
      data:{
        name: line.name,
        address: line.address,
        yelp_id: line.yelp_id,
      }
    })
  })

module.export = addRestaurants
