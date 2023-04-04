const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b, k] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(v => (isNaN(v) ? v : +v));

const arr = [];
for (let i = a; i <= b; i++) {
  if (i < a + k || i > b - k) {
    console.log(i);
  }
}
