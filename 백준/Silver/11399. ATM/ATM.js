const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...times] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
times.sort((a, b) => a - b);
let sum = 0;
let res = 0;
times.forEach(time => {
  sum += time;
  res += sum;
});
console.log(res);
