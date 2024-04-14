// จัดการ Routing
const express = require('express')
const router = express.Router()
const path = require('path')

// อ้างอิงตำแหน่งไฟล์
const indexPage = path.join(__dirname, "templates/index.html")
const productPage = path.join(__dirname, "templates/product1.html")


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../templates/index.html"))
    // res.status(200)
    // res.type('text/html')
    // res.sendFile(indexPage)
})

router.get("/product", (req, res) => {
    res.sendFile(path.join(__dirname, "../templates/product1.html"))
    // res.status(200)
    // res.type('text/html')
    // res.sendFile(productPage)
})

module.exports = router