const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B, C, D] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (B / A > D / C) {
  console.log('TAKAHASHI');
} else if (B / A < D / C) {
  console.log('AOKI');
} else {
  console.log('DRAW');
}
