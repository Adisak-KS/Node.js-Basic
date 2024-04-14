// จัดการ Routing
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const products = ["เสื้อ","พัดลม", "หูฟัง", "คีย์บอร์ด","เมาส์","จอภาพ","แอร์"]
    res.render('index',{products:products})
})

module.exports = router