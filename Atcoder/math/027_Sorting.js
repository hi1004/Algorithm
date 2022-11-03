const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(input[0]);
const nums = input[1].split(' ').map(Number);

console.log(nums.sort((a, b) => a - b).join(' '));
