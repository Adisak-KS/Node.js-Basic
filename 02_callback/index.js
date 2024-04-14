// console.log("เริ่มต้นโหลด");
// console.log("กำลังดาวน์โหลด");
// console.log("จบการทำงาน")

// console.log("เริ่มต้นโหลด");
// setTimeout(()=>{
//     console.log("กำลังดาวน์โหลด");
// },3000)
// console.log("จบการทำงาน")



// ทบทวน Callback Function
// function calculate(x, y, callback) {
//     setTimeout(() => {
//         const sum = x + y
//         callback()
//     }, 3000)
// }

// function display(result) {
//     console.log(`ผลบวก = ${result}`)
// }

// Function แบบปกติ
// const sum = calculate(100,50)
// display(sum)


// Function แบบ callback
// calculate(10,50,function(result){
//     console.log(`ผลบวก = ${result}`)
// })



// เขียนโปรแกรมดาวน์โหลดไฟล์

// const url1 = "adisak.dev/file1.json";

// function downloading(url,callback) {
//     console.log(`กำลังโหลด ${url1}`)
//     setTimeout(() => {
//         callback(url1)
//     }, 3000)
// }

// // function complete(result) {
// //     console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
// // }

// // downloading(url1, complete)


// // แบบสั้น
// downloading(url1,function(result){
//     console.log(`ดาวโหลด ${result} เรียบร้อย!`)
// })


// เขียนโปรแกรมดาวน์โหลด 3 ไฟล์

const url1 = "adisak.dev/file1.json";
const url2 = "adisak.dev/file2.json";
const url3 = "adisak.dev/file3.json";

function downloading(url,callback) {
    console.log(`กำลังโหลด ${url}`)
    setTimeout(() => {
        callback(url)
    }, 3000)
}

downloading(url1,function(result){
    console.log(`ดาวโหลด ${result} เรียบร้อย!`)
    downloading(url2,function(result){
        console.log(`ดาวโหลด ${result} เรียบร้อย!`)
        downloading(url3,function(result){
            console.log(`ดาวโหลด ${result} เรียบร้อย!`)
        })
    })
    
})