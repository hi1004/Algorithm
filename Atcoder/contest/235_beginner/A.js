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
let [a, b, c] = String(n).split('');

console.log(Number(a + b + c) + Number(b + c + a) + Number(c + a + b));
