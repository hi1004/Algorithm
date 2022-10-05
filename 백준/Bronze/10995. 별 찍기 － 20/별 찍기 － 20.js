const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const star = '*'.repeat(N);

for (let i = 1; i <= N; i++) {
  if (i % 2 !== 0) {
    console.log(star.split('').join(' '));
  } else {
    console.log(' ' + star.split('').join(' '));
  }
}
