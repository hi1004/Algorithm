const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [x, n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);
for (let i = 0; i < n; i++) {
  x = x % 2 === 0 ? (x / 2) ^ 6 : (2 * x) ^ 6;
}
console.log(x);
