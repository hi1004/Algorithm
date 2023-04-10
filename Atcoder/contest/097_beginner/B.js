const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [x] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(v => (isNaN(v) ? v : +v));

const answer = [1];
let b = 2;
let p = 2;
for (let i = 0; i < x; i++) {
  if (b ** p <= x) {
    answer.push(b ** p);
    p++;
  } else {
    b++;
    p = 2;
  }
}
console.log(Math.max(...answer));
