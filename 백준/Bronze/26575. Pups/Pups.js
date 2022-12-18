const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
  const arr = input[i].split(' ').map(Number);
  const result = arr.reduce((a, b) => a * b, 1);
  console.log(`$${(Math.round(result * 100) / 100).toFixed(2)}`);
}
