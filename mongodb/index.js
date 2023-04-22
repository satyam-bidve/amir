const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://satyam:bidve@cluster0.cj5e7ms.mongodb.net/mern?retryWrites=true&w=majority").then((e)=>console.log("mongo connected")).catch((e)=>console.log(e))