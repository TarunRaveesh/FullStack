const fs = require('fs').promises;

// Reading a file using Promises with normal functions
fs.readFile('./Promises/a.txt', 'utf8')
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.error(err);
    });
