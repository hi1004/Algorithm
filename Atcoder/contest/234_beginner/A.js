const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[t]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

const f = x => x ** 2 + 2 * x + 3;

const res = f(f(f(t) + t) + f(f(t)));
console.log(res);
