const { User } = require('../models');

const userData = [
  {
    username: "Tino",
    email: "tino@gmail.com",
    password: "password1234"
  },
  {
    username: "Tim",
    email: "tim@gmail.com",
    password: "password1234"
  },
  {
    username: "todd",
    email: "todd@gmail.com",
    password: "password1234"
  },
  {
    username: "terrance",
    email: "t@gmail.com",
    password: "password1234"
  },
  {
    username: "Tony",
    email: "tony@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);



module.exports = seedUsers;