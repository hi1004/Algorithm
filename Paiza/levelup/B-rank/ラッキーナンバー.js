const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const n = input.shift();

const nums = input;
const numbers_777 = [];
let answer_counter = 0;
for (let i = 0; i < 1 << n; i++) {
  let sum = 0;
  const bit = [];

  for (let j = 0; j < n; j++) {
    if (((i >> j) & 1) === 1) {
      sum += nums[j];
    }
  }

  if (sum === 777) {
    if (answer_counter === 0) {
      for (let j = 0; j <= n; j++) {
        if (((i >> j) & 1) === 1) {
          numbers_777.push(nums[j]);
        }
      }
    }
    answer_counter++;
  }
}
if (answer_counter === 0) {
  console.log('no answer');
} else if (answer_counter >= 2) {
  console.log('multiple answers');
} else {
  numbers_777.sort((a, b) => a - b);
  console.log(numbers_777.join(' '));
}
