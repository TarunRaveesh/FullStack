let n = 10
let x = 0
let y = 1
console.log(x);
console.log(y);
for (let i = 2; i < n; i++) {
    z = x + y;
    x = y;
    y = z;
    console.log(z)
}