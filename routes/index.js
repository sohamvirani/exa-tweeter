const express = require("express");
const userRoute = require("./user.route");
// const adminRoute = require("./admin.route");

const tweetRoute = require("./tweet.route");



const route = express.Router();

route.use("/user", userRoute);
// route.use("/admin", adminRoute);
route.use("/tweet", tweetRoute);



module.exports = route;
