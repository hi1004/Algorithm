const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, nums] = fs.readFileSync(file).toString().trim().split('\n');
nums = nums
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
let res = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === nums[i + 1]) {
    res++;
    i++;
  }
}
console.log(res);
