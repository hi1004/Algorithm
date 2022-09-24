const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(n * (n - 1));
