const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[l, r], [s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

console.log(
  s.replace(
    s.substring(l - 1, r),
    s
      .substring(l - 1, r)
      .split('')
      .reverse()
      .join('')
  )
);
