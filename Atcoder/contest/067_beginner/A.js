const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

if (A % 3 === 0 || B % 3 === 0 || (A + B) % 3 === 0) {
  console.log('Possible');
} else {
  console.log('Impossible');
}
