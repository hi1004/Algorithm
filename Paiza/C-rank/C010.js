const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [a, b, r] = input.shift().split(' ').map(Number);
const n = Number(input.shift());
for (let i = 0; i < n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  const answer =
    Math.pow(x - a, 2) + Math.pow(y - b, 2) >= Math.pow(r, 2)
      ? 'silent'
      : 'noisy';
  console.log(answer);
}
