const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Hello Express.js | 2024</h1>")
})

app.get("/product",(req, res)=>{
    res.send("<h1>Hello Product</h1>")
})

app.listen(8080,()=>{
    console.log("รัน Server ที่ port 8080")
})
