const http = require('http');
const url = require('url');
const fs = require('fs').promises; // Menggunakan promises dari fs

const server = http.createServer(async (req, res) => {
    const q = url.parse(req.url, true);
    console.log(q.pathname);
    const filename = `.${q.pathname}`; // Menggunakan template literal

    try {
        const data = await fs.readFile(filename); // Membaca file dengan async/await
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    } catch (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("404 Not Found");
    }
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});

// http://localhost:8080/winter.html
// http://localhost:8080/summer.html