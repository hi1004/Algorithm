const [A, B, C, X] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map(Number);

let count = 0;
let sum = 0;

for (let i = 0; i <= A; i++) {
  for (let j = 0; j <= B; j++) {
    for (let k = 0; k <= C; k++) {
      sum = i * 500 + j * 100 + k * 50;
      if (sum === X) count++;
    }
  }
}
console.log(count);
