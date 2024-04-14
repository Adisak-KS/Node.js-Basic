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


router.get('/add-product', (req, res) => {
    if (req.cookies.login) {
        res.render('form') // บันทึกสินค้า
    } else {
        res.render('admin') // เข้าสู่ระบบ
    }

})

router.get('/manage', (req, res) => {
    if (req.cookies.login) {
        Product.find().exec()
            .then(doc => {
                res.render('manage', { products: doc })
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Failed to retrieve products.');
            });
    } else {
        res.render('admin') // เข้าสู่ระบบ
    }

})

//ออกจากระบบ
router.get('/logout', (req, res) => {
    // console.log("Test Logout")
    res.clearCookie('username')
    res.clearCookie('password')
    res.clearCookie('login')
    res.redirect('/manage')
})


router.get('/delete/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, { useFindAndModify: false })
        .then(() => {
            res.redirect('/manage');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Failed to delete product.');
        });
});



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


router.get('/:id', (req, res) => {
    const product_id = req.params.id
    console.log(product_id)
    Product.findOne({ _id: product_id }).exec()
        .then(doc => {
            console.log(doc)
            res.render('product', { product: doc })
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Failed to show detail product.');

        });

})


router.post('/edit', (req, res) => {
    const edit_id = req.body.edit_id
    Product.findOne({ _id: edit_id }).exec()
        .then(doc => {
            console.log(doc)
            // นำข้อมูลเดิมที่ต้องการแก้ไข ไปแสดงในแบบฟอร์ม
            res.render('edit', { product: doc })
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Failed to show detail product.');

        });
})

router.post('/update', (req, res) => {
    // ข้อมูลใหม่ที่ถูกส่งมาจากฟอร์มแก้ไข
    const update_id = req.body.update_id;
    let data = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };

    // อัพเดตข้อมูล
    Product.findByIdAndUpdate(update_id, data, { useFindAndModify: false })
        .then(() => {
            res.redirect('/manage');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Failed to update product.');
        });
});

// เข้าสู่ระบบ
router.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const timeExpire = 20000 // 20 วินาที

    if (username == "admin" && password === "123") {
        // สร้าง Cookie
        res.cookie('username', username, { maxAge: timeExpire })
        res.cookie('password', password, { maxAge: timeExpire })
        res.cookie('login', true, { maxAge: timeExpire }) // true => login เข้าสู่ระบบ
        res.redirect('/manage')
    } else {
        res.render('404')
    }
})



module.exports = router
