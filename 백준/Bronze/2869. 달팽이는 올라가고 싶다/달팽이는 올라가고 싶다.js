const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [A, B, V] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(Math.ceil((V - B) / (A - B)));
