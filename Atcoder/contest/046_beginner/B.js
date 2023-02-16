const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, k] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

console.log(k * (k - 1) ** (n - 1));
