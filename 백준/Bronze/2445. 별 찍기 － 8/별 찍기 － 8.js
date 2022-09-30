const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

for (let i = 1; i < (2 * n) / 2; i += 1) {
  console.log('*'.repeat(i) + ' '.repeat(2 * n - i * 2) + '*'.repeat(i));
}

for (let i = (2 * n) / 2; i >= 1; i -= 1) {
  console.log('*'.repeat(i) + ' '.repeat(2 * n - i * 2) + '*'.repeat(i));
}
