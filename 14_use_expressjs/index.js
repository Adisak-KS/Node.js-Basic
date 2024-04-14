const express = require('express')
const app = express()

app.use((req,res)=>{
    res.send("<h1>Hello Express.js</h1>")
})

app.listen(8080,()=>{
    console.log("รัน Server ที่ port 8080")
})
