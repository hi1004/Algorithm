const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const point = [6, 3, 2, 1, 2];

let sum;
const result = [];
for (let i = 0; i < 2; i++) {
  sum = 0;
  const team = line[i].split(' ').map(Number);
  for (let j = 0; j < point.length; j++) {
    sum += team[j] * point[j];
  }
  result.push(sum);
}
console.log(result.join(' '));
