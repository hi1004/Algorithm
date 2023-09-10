const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[H, W], ...thunder] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

let result = Array.from({ length: H / 3 }, () => Array(W / 3).fill(0));
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    result[Math.floor(i / 3)][Math.floor(j / 3)] += thunder[i][j];
  }
}

result = result
  .map(row => row.map(val => Math.floor(val / 9)).join(' '))
  .join('\n');

console.log(result);
