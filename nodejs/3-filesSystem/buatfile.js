const fs = require('fs');
fs.appendFile('dibuatpakenodejs.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });