const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split(' ').map(Number);
console.log(a + b);
