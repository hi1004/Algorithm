const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const nums = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(nums.sort((a, b) => a - b)[1]);
