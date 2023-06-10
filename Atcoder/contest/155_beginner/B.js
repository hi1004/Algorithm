const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const answer = a.filter(v => v % 2 === 0).map(n => n % 3 === 0 || n % 5 === 0);
console.log(answer.includes(false) ? 'DENIED' : 'APPROVED');
