const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[r, d, x]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r => r.trim().split(/\s+/))
  .map(i => (isNaN(i) ? i : i - 0));

for (let i = 0; i < 10; i++) {
  console.log(r * x - d);
  x = r * x - d;
}
