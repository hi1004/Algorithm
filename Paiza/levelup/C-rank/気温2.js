const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = input.shift();
const nums = input[0].split(' ').map(Number);
const max = Math.max(...nums);
const min = Math.min(...nums);
const answer = max - min;
console.log(answer);
