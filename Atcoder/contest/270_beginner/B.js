const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [X, Y, Z] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

if (Y < 0) {
  X = -X;
  Y = -Y;
  Z = -Z;
}

if (X < Y) {
  console.log(Math.abs(X));
} else {
  if (Z > Y) {
    console.log(-1);
  } else {
    console.log(Math.abs(Z) + Math.abs(X - Z));
  }
}
