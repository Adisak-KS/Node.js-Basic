// จัดการ Routing
const express = require('express')
const router = express.Router()
// เรียกใช้งานโมเดล
const Product = require('../models/products')

router.get('/', (req, res) => {
    const products = [
        {name:"โน๊ตบุค",price:25500,image:"images/products/product1.png"},
        {name:"เสื้อผ้า",price:2000,image:"images/products/product2.png"},
        {name:"หูฟัง",price:800,image:"images/products/product3.png"},
        {name:"โน๊ตบุค",price:25500,image:"images/products/product1.png"},
        {name:"เสื้อผ้า",price:2000,image:"images/products/product2.png"},
        {name:"หูฟัง",price:800,image:"images/products/product3.png"},
    ]
    res.render('index',{products:products})
})

router.get('/addForm', (req, res) => {
    res.render('form')
})

router.get('/manage', (req, res) => {
    res.render('manage')
})

router.post('/insert', (req, res) => {
    let data = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    });

    Product.SaveProduct(data)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Failed to insert product.');
        });
});

module.exports = router