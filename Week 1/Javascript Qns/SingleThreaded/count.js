const startTime = Date.now();

let count = 0;
let sum = 0;

for (let i = 1; i <= 10000000000; i++) {
    count++;
    sum += i;
}

const endTime = Date.now();
const duration = (endTime - startTime) / 1000;

console.log(`Count: ${count}`);
console.log(`Sum: ${sum}`);
console.log(`Time taken: ${duration} seconds`);
