const http = require('http');
const fs = require('fs').promises; // Menggunakan promises dari fs

const server = http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile('demo1.html'); // Membaca file dengan async/await
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.write('Error reading file');
    res.end();
  }
});

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});