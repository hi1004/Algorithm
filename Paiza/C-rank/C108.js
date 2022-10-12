const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(line.shift());

const collection = {};
const c = {};
for (let i = 0; i < n; i++) {
  collection[i + 1] = Number(line[i]);
  c[i + 1] = line[i + n].split(' ').map(Number);
}

const nums = line.slice(n * 2).map(Number);
const k = nums.shift();

let sum = 0;

for (let val of nums) {
  sum += collection[val];
}

for (let i = 1; i <= k - 1; i++) {
  sum += c[nums.shift()][nums[0] - 1];
}

console.log(sum);
