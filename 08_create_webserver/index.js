const http = require('http')

const server = http.createServer(function (req, res) {
    const myhtml = `
    <h1>Hello Node.js</h1>
    <p>Adisak Studio | 2024</p>
    `
    res.write(myhtml)
    res.end()
})

server.listen(8080, 'localhost', () => {
    console.log("start server in port 8080")
})