const express = require("express")
const app = express()
require("./mongodb/index")
const Router = require("./Router/index");

app.use(Router);


app.listen(8080,()=>console.log("server starter 8080"))