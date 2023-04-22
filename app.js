const express = require("express")
const app = express()
require("./mongodb/index")

app.get("/",(req,res)=>{
    res.send("server")
})

app.listen(8080,()=>console.log("server starter"))