const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(input.shift());

const nums = input.map(n => n.split(' ').map(Number)).flat();
nums.sort((a, b) => a - b);

let results = [];
let answer = [];

for (let i = 0; i < N - 1; i++) {
  let current = i;
  let next = current + 1;

  if (
    nums[next] - nums[current] === 1 &&
    Math.abs(nums[current] - nums[next]) === 1
  ) {
    results.push(nums[current], nums[next]);
  } else {
    results = [];
  }
  answer.push(results);
}
const filterArr = [...new Set(answer)];
const sortedArr = filterArr
  .filter(arr => arr.length)
  .map(arr => Math.max(...arr));
const temp = nums.filter(n => !filterArr.flat().includes(n));
const concat = sortedArr.concat(temp);
console.log(concat.reduce((a, b) => a + b));
