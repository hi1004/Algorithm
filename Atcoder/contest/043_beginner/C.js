const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...nums] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
const avg = Math.round(nums.reduce((a, b) => a + b, 0) / n);
let answer = 0;
for (let i = 0; i < n; i++) {
  answer += (nums[i] - avg) ** 2;
}
console.log(answer);
