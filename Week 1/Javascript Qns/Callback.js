const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function greeting(name) {
    console.log('Hello ' + name);
}

function promptInput(callback) {
    // const name = prompt('Enter your name: '); // This line will not work in Node.js (Browser Specific)
    rl.question('Please enter your name: ', (name) => {
        callback(name);
        rl.close();
    });
    
}

promptInput(greeting);