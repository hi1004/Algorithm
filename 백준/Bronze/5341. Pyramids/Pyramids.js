const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

input.pop();

function solution(n) {
  if (n <= 1) return 1;
  return n + solution(n - 1);
}
const answer = input.map(m => solution(m));
console.log(answer.join('\n'));
