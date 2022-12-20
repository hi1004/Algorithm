const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(input.shift());
const S = input[0].split(' ').map(Number);

// 3 4 8
let A = [S[0]];
let arr = [];
for (let i = N - 1; i > 0; i--) {
  arr.push(S[i] - S[i - 1]);
}

console.log(A.concat(arr.reverse()).join(' '));
