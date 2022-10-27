const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(inputs[0]);
const nums = inputs[1].split(' ').map(Number);

console.log(
  Array(3)
    .fill(0)
    .map((value, index) => 1 + index)
    .map(i => nums.filter(a => a == i).length)
    .map(x => (x * (x - 1)) / 2)
    .reduce((sum, x) => sum + x, 0)
);
