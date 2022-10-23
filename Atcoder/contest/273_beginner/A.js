const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split(' ');

const N = Number(line.shift());

function solution(n) {
  if (n === 0) return 1;
  return n * solution(n - 1);
}
console.log(solution(N));
