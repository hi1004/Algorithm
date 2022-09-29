const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

if (a > b) {
  console.log(a);
} else if (a < b) {
  console.log(b);
} else {
  console.log(a);
}
