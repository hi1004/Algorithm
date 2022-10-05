const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let j = 1;
for (let i = 1; i <= N; i++) {
  if (i === N) {
    console.log('*'.repeat(N + i - 1));
  } else if (i === 1) {
    console.log(' '.repeat(N - i) + '*');
  } else {
    console.log(' '.repeat(N - i) + '*' + ' '.repeat(j) + '*');
    j += 2;
  }
}
