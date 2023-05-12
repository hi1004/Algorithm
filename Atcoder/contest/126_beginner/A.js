const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, k], [s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
s = s.split('');
s[k - 1] = s[k - 1].toLowerCase();

console.log(s.join(''));
