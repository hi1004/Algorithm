const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, S] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let count = 0;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (i + j <= S) {
      count++;
    }
  }
}
console.log(count);
