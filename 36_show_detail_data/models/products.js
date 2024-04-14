// ใช้งาน  mongoose
const mongoose = require('mongoose')

// เชื่อมต่า MongpDB
const dbUrl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dbUrl).catch(err => console.log(err))


// ออกแบบ Schema
let productSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String
})


// สร้างโมเดล
let Product = mongoose.model("products", productSchema)

//ส่งออกโมเดล
module.exports = Product

// ออกแบบฟังก์ชันสำหรับบันทึกข้อมูล
module.exports.SaveProduct = function (model, data) {
    return new Promise((resolve, reject) => {
        model.save(data)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            });
    });
};

