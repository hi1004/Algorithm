const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(line[0]);
const nums = line[1].split(' ').map(Number);

function soltuion(n, arr) {
  arr.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      arr[i] = -arr[i];
    }
  }

  const answer = arr.reduce((a, b) => a + b, 0);
  return answer;
}

console.log(soltuion(N, nums));
