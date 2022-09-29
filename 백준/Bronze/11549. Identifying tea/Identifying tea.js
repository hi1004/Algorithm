const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(line.shift());
const numbers = line.join(' ').split(' ').map(Number);

console.log(numbers.filter(val => val === n).length);
