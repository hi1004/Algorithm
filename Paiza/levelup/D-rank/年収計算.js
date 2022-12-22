const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, c] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let answer = a;
if (c >= 20) {
  answer += 4 * b;
} else if (c >= 15) {
  answer += 3 * b;
} else if (c >= 10) {
  answer += 2 * b;
} else if (c >= 5) {
  answer += b;
}
console.log(answer);
