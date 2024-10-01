const express = require("express");
const dotenv = require("dotenv")
const app = express();

const authRoutes = require("./routes/auth.route")
const movieRoutes = require("./routes/movie.route")

const {ENV_VARS} = require("./config/envVars")
const connectDB = require("./config/db")
const mongoose = require("mongoose")

//server
const PORT = ENV_VARS.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);

app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`);
    connectDB();
})



