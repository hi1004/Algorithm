const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [a1, p1] = input[0].split(' ').map(Number);
const [r1, p2] = input[1].split(' ').map(Number);

if (a1 * p2 > Math.PI * r1 ** 2 * p1) {
  console.log('Slice of pizza');
} else {
  console.log('Whole pizza');
}
