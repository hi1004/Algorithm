const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

if (a === 0 || b === 0) {
  console.log('invalid');
} else {
  console.log(a * b);
}
