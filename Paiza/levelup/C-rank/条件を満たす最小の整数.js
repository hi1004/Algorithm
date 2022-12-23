const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, y, z] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let answer = x;
while (answer % y !== z) {
  answer++;
}
console.log(answer);
