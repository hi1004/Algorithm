const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, n] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let i = 2;
while (true) {
  if (i % a === 0 && i % b === 0 && i >= n) {
    break;
  }
  i++;
}

console.log(i);
