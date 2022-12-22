const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n').map(Number);
const n = input.shift();
const nums = input.slice();

for (let i = 0; i < n; i++) {
  const arr = [];
  for (let j = 1; j < nums[i]; j++) {
    if (nums[i] % j === 0) {
      arr.push(j);
    }
  }
  const sum = arr.reduce((a, b) => a + b, 0);
  if (nums[i] === sum) {
    console.log('perfect');
  } else if (Math.abs(nums[i] - sum) === 1) {
    console.log('nearly');
  } else {
    console.log('neither');
  }
}
