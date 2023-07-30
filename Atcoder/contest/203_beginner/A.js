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
let answer = 0;
if (new Set(a).size === 3) {
  answer = 0;
} else if (new Set(a).size === 1) {
  answer = a[0];
} else {
  const index = [...new Set(a)]
    .map(n => a.filter(v => v === n).length)
    .indexOf(1);

  answer = [...new Set(a)][index];
}
console.log(answer);
