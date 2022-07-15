const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

const [N, M, X, T, D] = input;

if (M >= X) {
  console.log(T);
} else {
  console.log(T - (X - M) * D);
}
