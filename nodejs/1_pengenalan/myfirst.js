var http = require('http');
var dt = require('./myfirstmodule');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Tanggal dan waktu saat ini: ' + dt.myDateTime());
    res.write('\nHalo, Selamat datang di Node.js');
    res.end();
}).listen(8080);

// http://localhost:8080/