const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const N = input.shift();
const nums = input[0].split(' ').map(Number);

const sum = nums.reduce((a, b) => a + b, 0);
const answer = sum % 100;
console.log(answer);
