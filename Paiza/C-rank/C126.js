const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [A, B, N] = input.shift().split(' ').map(Number);
const days = input.slice().map(day => day.split(' ').map(Number));

let sum = 0;
for (let i = 1; i < days.length; i++) {
  const day = days[i][0] - days[i - 1][1];

  sum = A * 2 > B * day && day > 0 ? (sum += B * day) : (sum += A * 2);
}
console.log(sum + A * 2);
