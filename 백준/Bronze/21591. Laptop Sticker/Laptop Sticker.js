const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [w1, h1, w2, h2] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let count = 0;
if (w1 - w2 >= 2 && h1 - h2 >= 2) {
  count++;
} else {
  count = 0;
}
console.log(count);
