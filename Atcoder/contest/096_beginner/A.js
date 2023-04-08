const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(v => (isNaN(v) ? v : +v));

let cut = 0;

for (let i = 1; i <= a; i++) {
  if (i < a || i <= b) {
    cut++;
  } else {
    break;
  }
}

console.log(cut);
