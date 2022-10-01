const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [p, q] = fs.readFileSync(file).toString().trim().split('\n').map(Number);

if (p <= 50 && q <= 10) {
  console.log('White');
} else if (q > 30) {
  console.log('Red');
} else {
  console.log('Yellow');
}
