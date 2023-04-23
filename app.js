const express = require("express")
const app = express()
var cors = require("cors");
const bodyParser = require("body-parser");

require("./mongodb/index")
const Router = require("./Router/index");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());

app.use(Router);


app.listen(8080,()=>console.log("server starter 8080"))