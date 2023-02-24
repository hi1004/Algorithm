const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

if (A === B) {
  console.log('Draw');
} else if (A === 1) {
  console.log('Alice');
} else if (B === 1) {
  console.log('Bob');
} else if (A > B) {
  console.log('Alice');
} else {
  console.log('Bob');
}
