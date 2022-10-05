const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

for (let i = 1; i < (2 * N) / 2; i++) {
  console.log(' '.repeat((2 * N) / 2 - i) + '*'.repeat(i));
}

for (let i = (2 * N) / 2; i >= 1; i--) {
  console.log(' '.repeat((2 * N) / 2 - i) + '*'.repeat(i));
}
