const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ');

const answer = [];
for (let i = 1; i <= N; i++) {
  answer.push(i * (N - i));
}
console.log(Math.max(...answer));
