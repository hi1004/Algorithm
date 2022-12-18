const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const A = (a + b) / 2;
const B = a - A;
if (A < 0 || B < 0 || Math.floor(A) !== A) {
  console.log(-1);
} else {
  console.log(A, B);
}
