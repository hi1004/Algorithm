const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

function solution(arr) {
  if (!arr.length) return null;
  arr.sort((a, b) => b - a);

  return arr[1];
}

console.log(solution(input));
