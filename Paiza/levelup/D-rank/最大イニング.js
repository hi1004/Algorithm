const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [k] = input.shift().split(' ').map(Number);
const m = input.slice().map(n => Number(n));

let sum = 0;
let answer = 'Yes';
for (let i = 0; i < m.length; i++) {
  sum += m[i];

  if (sum > k) {
    answer = i + 1;
    break;
  }
}
console.log(answer);
