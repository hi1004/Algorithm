const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const nums = fs.readFileSync(file).toString().trim().split('\n').map(Number);

nums.pop();
console.log(nums.reduce((a, b) => a + b));
