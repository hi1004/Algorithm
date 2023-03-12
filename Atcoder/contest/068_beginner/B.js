const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

let answer = 0;
for (let i = 1; i <= n; i++) {
  if (n === 1) {
    answer = 1;
  }
  if (2 ** i <= n) {
    answer = 2 ** i;
  }
}
console.log(answer);
