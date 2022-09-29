const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);
input.sort((a, b) => a - b);
const [a, b, c] = input;

const triangle1 = a ** 2 + b ** 2 === c ** 2;
const triangle2 = new Set(input).size === 1;

if (triangle1 && !triangle2) {
  console.log(1);
}
if (triangle2 && !triangle1) {
  console.log(2);
}
if (!triangle1 && !triangle2) {
  console.log(0);
}
