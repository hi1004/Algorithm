const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : BigInt(i)))
  );

let ans = [];
for (let i = 0; i < 2; i++) {
  for (let j = 2; j < 4; j++) {
    ans.push(a[i] * a[j]);
  }
}
const max = ans.reduce((x, y) => (x > y ? x : y));
console.log(max.toString());
