const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input.shift());
const numbers = input[0].split(' ').map(Number);
const v = Number(input[1]);

const result = numbers.filter(num => num === v).length;
console.log(result);
