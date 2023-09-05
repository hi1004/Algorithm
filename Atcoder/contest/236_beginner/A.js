const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s], [a, b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
s = [...s];
const temp = s[a - 1];
s[a - 1] = s[b - 1];
s[b - 1] = temp;
console.log(s.join(''));
