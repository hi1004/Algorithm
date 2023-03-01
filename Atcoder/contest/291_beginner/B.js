const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...nums] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

nums.sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
  nums.shift();
  nums.pop();
}
console.log(nums.reduce((a, b) => a + b, 0) / nums.length);
