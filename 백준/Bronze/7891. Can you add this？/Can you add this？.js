const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = input.shift();

for (let i = 0; i < n; i++) {
  const sum = input[i]
    .split(' ')
    .map(Number)
    .reduce((a, b) => a + b);
  console.log(sum);
}
