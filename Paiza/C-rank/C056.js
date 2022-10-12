const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const [N, M] = line[0].split(' ').map(Number);

for (let i = 1; i <= N; i++) {
  const [a, b] = line[i].split(' ').map(Number);
  const result = a - b * 5 < 0 ? 0 : a - b * 5;

  if (result >= M) {
    console.log(i);
  }
}
