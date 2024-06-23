const fs = require('fs');

// Reading a file using callbacks with normal functions
fs.readFile('./Promises/a.txt', 'utf8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
