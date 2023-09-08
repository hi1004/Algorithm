const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i))
  );

a = a.flat();
console.log(
  a
    .reduce((acc, cur) => acc ^ parseInt(cur, 2), '0000')
    .toString(2)
    .padStart(4, '0')
);
