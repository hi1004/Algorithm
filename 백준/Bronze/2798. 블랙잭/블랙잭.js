const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const result = [];
let sum = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      sum = numbers[i] + numbers[j] + numbers[k];
      if (sum <= m) {
        result.push(sum);
      } else {
        continue;
      }
    }
  }
}

console.log(Math.max(...result));
