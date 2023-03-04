const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [N] = input.shift().split(' ').map(Number);

const nums = [];
for (let i = 1; i < N; i++) {
  nums.push(i);
}
let count = 0;
console.log(nums);
