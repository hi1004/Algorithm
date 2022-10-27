const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const nums = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const answer = nums.reduce((a, b) => a + b, 0);
console.log(answer);
