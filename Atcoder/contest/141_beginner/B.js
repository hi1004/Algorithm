const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s]] = require('fs')
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
for (let i = 1; i <= s.length; i++) {
  if (
    (i % 2 !== 0 &&
      (s[i - 1] === 'R' || s[i - 1] === 'U' || s[i - 1] === 'D')) ||
    (i % 2 === 0 && (s[i - 1] === 'L' || s[i - 1] === 'U' || s[i - 1] === 'D'))
  ) {
    ans = 'Yes';
  } else {
    ans = 'No';
    break;
  }
}
console.log(ans);
