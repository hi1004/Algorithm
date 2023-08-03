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
let ans = '';
a.forEach((v, i) => {
  ans += String.fromCharCode(96 + v);
});
console.log(ans);
