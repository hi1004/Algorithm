const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);
const N = input.shift();
const sorted = input.sort((a, b) => b - a);

const nums = sorted.map(n => {
  if (sorted.indexOf(n) % 2 !== 0) return -n * n;
  else if (sorted.indexOf(n) % 2 === 0) return n * n;
});
console.log(nums.reduce((a, b) => a + b, 0) * Math.PI);
