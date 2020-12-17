const http = require('http')

http.createServer(function (req, res) {

    console.log(req.headers)
    
    res.writeHead(200)
    res.write("hello")

    setTimeout(() => {
        res.end("World")
    }, 500);
}).listen(3002)