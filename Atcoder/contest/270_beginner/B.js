const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [X, Y, Z] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (Y < Z && Z < X) {
  console.log(X);
} else if (Z < Y && Y < X && Y > 0) {
  console.log(Math.abs(Z) * 2 + Math.abs(X));
} else if (X < Y && Y < Z && Y < 0) {
  console.log(Math.abs(Z) * 2 + Math.abs(X));
} else {
  console.log(-1);
}
