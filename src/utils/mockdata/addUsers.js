
const userFile = require('./userData.json')
const axios = require('axios')

const addUser = () => {}
  userFile.forEach(line => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/user',
      data:{
        username: line.username,
        password: line.password,
        dob: line.dob,
        email: line.email,
      }
    })
  })

module.exports = addUser
