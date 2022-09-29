const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

function solution(arr) {
  const isRising = [];
  const set = new Set(arr);

  for (let i = 0; i < 3; i++) {
    isRising.push(arr[i] - arr[i + 1] <= 0);
  }

  const distinction = new Set(isRising);

  if (set.size === 1) return 'Fish At Constant Depth';

  if (new Set(isRising).size === 2) {
    return 'No Fish';
  } else if ([...distinction].includes(true)) {
    return 'Fish Rising';
  }
  return 'Fish Diving';
}

console.log(solution(input));
