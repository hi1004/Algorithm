const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const N = input.shift();
const nums = input[0].split(' ').map(Number);

const odd = [];
const even = [];

for (let i = 0; i < N; i++) {
  if (nums[i] % 2 === 0) {
    even.push(nums[i]);
  } else {
    odd.push(nums[i]);
  }
}

let max = -1;
even.sort((a, b) => b - a);
odd.sort((a, b) => b - a);
if (even.length >= 2) max = Math.max(max, even[0] + even[1]);
if (odd.length >= 2) max = Math.max(max, odd[0] + odd[1]);
console.log(max);
