const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [x, y, n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

if (3 * x < y) {
  console.log(x * n);
} else {
  console.log(y * Math.floor(n / 3) + x * (n % 3));
}
