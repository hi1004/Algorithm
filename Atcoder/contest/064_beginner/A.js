const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const nums = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

console.log(Number(nums.join('')) % 4 === 0 ? 'YES' : 'NO');
