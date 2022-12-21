const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const [n, x] = input.shift().split(' ').map(Number);
const arrs = input.map(n => Number(n));

const nums = x.toString(2).split('').reverse().join('');

arrs.forEach(n => {
  console.log(nums[n - 1]);
});
