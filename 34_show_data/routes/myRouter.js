// จัดการ Routing
const express = require('express')
const router = express.Router()
// เรียกใช้งานโมเดล
const Product = require('../models/products')

// อัปโหลดไฟล์
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/products') //ตำแหน่งจัดเก็บไฟล์
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + ".jpg") // เปลี่ยนชื่อไฟล์ ป้องกันชื่อซ้ำ
    }
})

// เริ่มต้น uploads
const upload = multer({
    storage: storage
})


router.get('/', (req, res) => {
    Product.find().exec()
        .then(doc => {
            res.render('index', { products: doc });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Failed to retrieve products.');
        });
});


router.get('/addForm', (req, res) => {
    res.render('form')
})

router.get('/manage', (req, res) => {
    Product.find().exec()
        .then(doc => {
            res.render('manage',{products:doc})
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Failed to retrieve products.');
        });
    
})

router.post('/insert', upload.single("image"), (req, res) => {
    // console.log(req.file)
    let data = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.file.filename,
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
