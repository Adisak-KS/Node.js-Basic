const http = require('http')

const server = http.createServer(function (req, res) {
    const pathName = req.url
    console.log("url = ", pathName)
    if (pathName === "/" || pathName === "/home"){
        res.end("<h1>Hello Homepage</h1>")
    }else if(pathName === "/product"){
        res.end("<h1>Hello Product</h1>")
    }else{
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }
})

server.listen(8080, 'localhost', () => {
    console.log("start server in port 8080")
})