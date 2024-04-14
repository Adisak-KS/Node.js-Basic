// สร้าง Promise

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

//Async & Await (แนะนำ) นิยมใช้

// นิยใช้เกี่ยวกับ Api

async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
}

start()


// api ภาพสินค้า (ฺBackend) -> Frontend (แสดงภาพในเว็บ)
// api (promise) -> (pending) -> รอข้อมูมาครบ (await) -> แสดงภาพ


// loadind..... -> แสดงภาพ




// Permis Hell (ไม่ควรใช้) ไม่นิยม
// downloading(url1).then(function(result){
//     console.log(result)
//     downloading(url2).then(function(result){
//         console.log(result)
//         downloading(url3).then(function(result){
//             console.log(result)
//         })
//     })
// })



// Promis Then (ควรใช้) ไม่นิยม
// downloading(url1).then(function(result){
//     console.log(result)
//     return downloading(url2)
// }).then(function(result){
//     console.log(result)
//     return downloading(url3)
// }).then(function(result){
//     console.log(result)
// })



