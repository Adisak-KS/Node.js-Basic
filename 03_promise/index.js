// สร้าง Promise

// const connect = true; // เช็คว่าต่อเน็ต
// const url1 = "Adisak.dev/file1.json";

// function downloading(url) {
//     return new Promise(function (resolve, reject) {
//         console.log(`กำลังโหลดไฟล์จาก ${url}`)
//         setTimeout(() => {
//             if (connect) {
//                 resolve(`โหลด ${url} เรียบร้อย`)
//             } else {
//                 reject('เกิดข้อผิดพลาด')
//             }
//         },3000)
//     })
// }

// downloading(url1).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("จบการทำงาน")
// })


const connect = true; // เช็คว่าต่อเน็ต
const url1 = "Adisak.dev/file1.json";
const url2 = "Adisak.dev/file2.json";
const url3 = "Adisak.dev/file3.json";
const url4 = "Adisak.dev/file4.json";
const url5 = "Adisak.dev/file5.json";

function downloading(url) {
    return new Promise(function (resolve, reject) {
        console.log(`กำลังโหลดไฟล์จาก ${url}`)
        setTimeout(() => {
            if (connect) {
                resolve(`โหลด ${url} เรียบร้อย`)
            } else {
                reject('เกิดข้อผิดพลาด')
            }
        }, 1000)
    })
}

// Permis Hell (ไม่ควรใช้)
// downloading(url1).then(function(result){
//     console.log(result)
//     downloading(url2).then(function(result){
//         console.log(result)
//         downloading(url3).then(function(result){
//             console.log(result)
//         })
//     })
// })


// Promis Then (ควรใช้)
downloading(url1).then(function(result){
    console.log(result)
    return downloading(url2)
}).then(function(result){
    console.log(result)
    return downloading(url3)
}).then(function(result){
    console.log(result)
})



