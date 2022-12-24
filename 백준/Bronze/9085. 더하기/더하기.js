const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input.shift());
const sum = arr => arr.reduce((a, b) => a + b, 0);
for (let i = 1; i < input.length; i += 2) {
  const arr = input[i].split(' ').map(Number);
  console.log(sum(arr));
}
