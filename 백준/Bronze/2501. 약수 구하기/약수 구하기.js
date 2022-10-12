const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const [n, k] = input;
const nums = [];
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    nums.push(i);
  }
}
console.log(nums[k - 1] ? nums[k - 1] : 0);
