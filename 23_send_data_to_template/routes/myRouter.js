// จัดการ Routing
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const name = "adisak"
    const age = "22"
    const address = "<h3>กรุงเทพ หัวหิน</h3>"
    res.render('index.ejs',{name:name,age:age,address:address})
})

module.exports = router