const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const numbers = fs.readFileSync(file).toString().trim().split('\n').map(Number);

console.log(numbers.reduce((a, b) => b - a));
