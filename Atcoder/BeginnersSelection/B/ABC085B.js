const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const N = Number(line.shift());
const nums = line.sort((a, b) => b - a);

function soltuion(arr) {
  const unique = arr => [...new Set(arr)];
  const answer = unique(arr).length;
  return answer;
}

console.log(soltuion(nums));
