const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

input.pop();

const arr = input.slice().map(nums => nums.split(' ').map(Number));

const answer = arr.map(nums => {
  return nums.reduce((a, b) => a + b, 0);
});
console.log(answer.join('\n'));
