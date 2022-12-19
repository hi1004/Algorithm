const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(input.shift());
let count = 0;
for (let i = 0; i < N; i++) {
  const [sub, ...scores] = input[i].split(' ');
  const score = scores.map(Number);
  const sumScore = score.reduce((a, b) => a + b, 0);
  if (sub === 's') {
    if (sumScore >= 350 && score[1] + score[2] >= 160) {
      count++;
    }
  } else {
    if (sumScore >= 350 && score[3] + score[4] >= 160) {
      count++;
    }
  }
}
console.log(count);
