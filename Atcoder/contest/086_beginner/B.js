const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split(' ');
console.log(Number.isInteger(Math.sqrt(Number(a + b))) ? 'Yes' : 'No');
