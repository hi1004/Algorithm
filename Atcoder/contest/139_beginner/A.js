const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a], [b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const answer = [...a].filter((v, i) => v == [...b][i]).length;
console.log(answer);
