const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, p], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

const answer = a.filter(v => v < p).length;
console.log(answer);
