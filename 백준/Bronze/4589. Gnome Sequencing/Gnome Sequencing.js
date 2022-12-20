const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input.shift());

let answer = [];

for (let i = 0; i < n; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);

  if ((a <= b && b <= c) || (a >= b && b >= c)) {
    answer.push('Ordered');
  } else {
    answer.push('Unordered');
  }
}
console.log('Gnomes:');
console.log(answer.join('\n'));
