const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const numbers = fs.readFileSync(file).toString().trim().split(' ').map(BigInt);

console.log(numbers.reduce((acc, cur) => acc * cur).toString());
