const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, y] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let answer = '-1 -1 -1';
for (let i = 0; i <= n; i++) {
  for (let j = 0; i + j <= n; j++) {
    const k = n - i - j;
    if (i * 10000 + j * 5000 + k * 1000 === y) {
      answer = `${i} ${j} ${k}`;
    }
  }
}
console.log(answer);
