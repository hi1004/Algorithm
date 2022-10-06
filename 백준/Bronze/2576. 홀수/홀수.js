const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

function oddNumberSum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function oddNumberMin(arr) {
  return Math.min(...arr);
}

function solution(arr) {
  const oddNumbers = arr.filter(num => num % 2 !== 0);
  if (!oddNumbers.length) return -1;

  return [oddNumberSum(oddNumbers), oddNumberMin(oddNumbers)].join('\n');
}

console.log(solution(input));
