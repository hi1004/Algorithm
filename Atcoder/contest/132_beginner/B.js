const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], p] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let count = 0;
for (let i = 0; i <= n - 3; i++) {
  if (p.slice(i, 3 + i)[1] === p.slice(i, 3 + i).sort((a, b) => a - b)[1]) {
    count++;
  }
}
console.log(count);
