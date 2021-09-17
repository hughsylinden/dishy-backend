
const dishFile = require('./dishData.json')
const axios = require('axios')

const addRestaurants = () => {}
dishFile.forEach(line => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/dish',
      data:{
        name: line.name,
      }
    })
  })

module.export = addRestaurants
