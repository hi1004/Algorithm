const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split(' ').map(Number);
console.log(Math.max(a + b, a - b));
console.log(Math.min(a + b, a - b));
