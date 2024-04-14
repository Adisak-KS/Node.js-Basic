// ใช้กับ folder myFile

// Non-Blocking
const fs = require('fs');

// อ่านไฟล์ input.txt
fs.readFile('myfile/input.txt', 'utf-8',(err, data)=>{
    if(err) return console.log("เกิดข้อผิดพลาด", err)
    const outputText = `Hello Node.js\n${data}\nไฟล์นี้ถูกเขียนเมื่อ${new Date()}`
    fs.writeFile("myFile/output.txt",outputText,err=>{
        if(err) return console.log("เกิดข้อผิดพลาด", err)
        console.log("เขียนไฟล์เสร็จเรียบร้อย");
    })
});
