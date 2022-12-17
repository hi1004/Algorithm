const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...nums] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

nums.reverse();

let count = 1;
let result = 0;

while (nums.length !== 1) {
  const pop = nums.pop();
  if (N === pop) {
    result++;
  }
  nums.unshift(pop);

  if (pop === count) {
    count++;
    nums.shift();
  }
  console.log(nums);
}
console.log(result);
