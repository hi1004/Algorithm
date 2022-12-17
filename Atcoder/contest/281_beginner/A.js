const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ');

for (let i = N; i >= 0; i--) {
  console.log(i);
}
