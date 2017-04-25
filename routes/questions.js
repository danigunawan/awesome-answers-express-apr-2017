const express = require('express');
const router = express.Router();

const Question = require('../models/index').Question;
// 👇 NEW! Destructuring
// const {Question} = require('../models/index');

router.get('/', function (request, response, next) {
  Question
    .findAll() // this returns a promise..
    .then(function (questions) { // allowing us to use .then
      // the pathof the template that response.render takes
      // is relative to the view/ folder by default
      response.render('questions/index', {questions: questions});
      // the second argument passed to response.render is an
      // object where all its properties will be available to
      // the rendered template as variables
    });
    // All sequelize query methods return a promise
})

module.exports = router;
