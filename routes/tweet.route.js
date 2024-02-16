const express = require('express');
const tweetController = require('../controllers/tweet.controller');
const validate = require("../middlewares/validate")
const {tweetValidation}=require("../validations")

const route = express.Router();

route.get('/get', tweetController.getAllTweets);
route.post('/add', validate(tweetValidation.addtweet),tweetController.createTweet);
route.delete('/delete/:id',tweetController.deleteTweet);

module.exports = route;
