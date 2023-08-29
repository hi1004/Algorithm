const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
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
  n >= 42
    ? `AGC0${n + 1 < 10 ? '0' + n + 1 : n + 1}`
    : `AGC0${n < 10 ? '0' + n : n}`
);
