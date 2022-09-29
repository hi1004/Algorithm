const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

function solution(arr) {
  const [n, a, b, c, d] = arr;
  if (!arr.length) return null;

  const x = Math.ceil(n / a) * b;
  const y = Math.ceil(n / c) * d;

  return Math.min(x, y);
}

console.log(solution(input));
