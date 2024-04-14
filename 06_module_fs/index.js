// ใช้กับ folder myFile

// Blocking
const fs = require('fs');

// อ่านไฟล์ input.txt
const data = fs.readFileSync('myfile/input.txt', 'utf-8');
console.log(data);

// เขียนไฟล์
const outputText = `Hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`
fs.writeFileSync("myFile/output.txt",outputText)
console.log("เขียนไฟล์เรียบร้อย!")
