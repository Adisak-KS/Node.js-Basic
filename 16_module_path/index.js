const express = require('express')
const path = require('path')
const app = express()

// อ้างอิงตำแหน่งไฟล์
const indexPage = path.join(__dirname,"templates/index.html")
const productPage = path.join(__dirname,"templates/product1.html")


app.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(indexPage)
})

app.get("/product",(req, res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(productPage)
})

app.listen(8080,()=>{
    console.log("รัน Server ที่ port 8080")
})
