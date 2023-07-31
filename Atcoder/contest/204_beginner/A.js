const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const arr = [0, 1, 2];
let ans = 0;
arr.forEach((v, i) => {
  if (!a.includes(v) && new Set(a).size !== 1) {
    ans = v;
    return;
  } else if (new Set(a).size === 1) {
    ans = a[0];
    return;
  }
});
console.log(ans);
