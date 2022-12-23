const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const [N, R] = input.shift().split(' ').map(Number);
const nums = input.slice().map(n => Number(n));
const maxLength = Math.max(...nums) / R;

for (let i = 0; i < N; i++) {
  let answer = '';

  answer += '*'.repeat(nums[i] / R) + '.'.repeat(maxLength - nums[i] / R);

  console.log(`${i + 1}:${answer}`);
}
