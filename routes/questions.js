const express = require('express');
const router = express.Router();

const Question = require('../models/index').Question;
// 👇 NEW! Destructuring
// const {Question} = require('../models/index');

router.get('/', function (request, response, next) {
  Question
    .findAll()
    .then(function (questions) { // allowing us to use .then
      response.send(questions);
    });
    // All sequelize query methods return a promise
})

module.exports = router;
