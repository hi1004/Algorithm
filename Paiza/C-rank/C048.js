const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [x, p] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let result = x;
let sum = x;

while (result > 0) {
  result = Math.floor(x - (x * p) / 100);
  x = result;
  sum += x;
}
console.log(sum);
