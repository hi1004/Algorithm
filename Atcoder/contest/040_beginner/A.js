const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);
console.log(A - B < B - 1 ? A - B : B - 1);
