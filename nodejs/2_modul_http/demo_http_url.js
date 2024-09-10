var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);

// req.url Objek ini memiliki properti yang disebut "url" yang menyimpan bagian url yang muncul setelah nama domain