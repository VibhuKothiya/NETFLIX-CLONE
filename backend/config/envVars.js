require("dotenv").config();
const express = require("express");

console.log(`Mongo_url : ${process.env.MONGO_URL}`);

const ENV_VARS = {
MONGO_URL : process.env.MONGO_URL,
PORT : process.env.PORT || 5050,
JWT_SECRET: process.env.JWT_SECRET,
TMDB_API_KEY : process.env.TMDB_API_KEY
        
}
module.exports = {ENV_VARS};

