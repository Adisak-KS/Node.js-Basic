// นิยม
const util = require('./modules/mymodules')

console.log(util.getCurrentTime())
console.log(util.add(50,100))

const number = 5000000
console.log(util.formatNumber(number));


////////////////////////////////////////////////////
// ไม่นิยม
// const now = require('./modules/mymodules').getCurrentTime
// const plus = require('./modules/mymodules').add

// console.log(now())
// console.log(util.add(20,30))
