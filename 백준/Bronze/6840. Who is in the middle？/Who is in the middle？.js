const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

function solution(arr) {
  arr.sort((a, b) => a - b);

  return arr[1];
}

console.log(solution(input));
