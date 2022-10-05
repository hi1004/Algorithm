const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push('*');
  console.log(' '.repeat(N - i) + '*'.repeat(i).split('').join(' '));
}
