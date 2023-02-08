const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [N, Q] = input.shift().split(' ').map(Number);
const line = input.slice().map(n => n.split(' ').map(Number));
const answer = Array.from({ length: N }).fill(0);

line.forEach(arr => {
  const [L, R, T] = arr;
  for (let i = L; i <= R; i++) {
    answer[i - 1] = T;
  }
});
answer.forEach(n => console.log(n));
