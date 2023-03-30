const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b, c, x] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
let count = 0;
for (let i = 0; i <= a; i++) {
  for (let j = 0; j <= b; j++) {
    for (let k = 0; k <= c; k++) {
      if (500 * i + 100 * j + 50 * k === x) {
        count++;
      }
    }
  }
}

console.log(count);
