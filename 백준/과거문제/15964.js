const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

function solution(a, b) {
  return (a + b) * (a - b);
}

console.log(solution(A, B));
