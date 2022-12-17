const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const nums = fs.readFileSync(file).toString().trim().split(' ').map(BigInt);

function soltuion(arr) {
  const [A, B, C, D, E, F] = arr;

  const result = (A * B * C - D * E * F) % BigInt(998244353);

  return result.toString();
}

console.log(soltuion(nums));
