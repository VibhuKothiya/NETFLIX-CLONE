const mongoose = require("mongoose");
const {ENV_VARS} = require("./envVars");

const connctDB = async ()=>{
    try{
        const conn = await mongoose.connect(ENV_VARS.MONGO_URL)
        console.log("MongoDB connected : ", conn.connection.host);
        
    }
    catch(err){
        console.error("Error connecting to MongoDB: " + err.message)
        process.exit(1)
    }   
}

module.exports = connctDB
