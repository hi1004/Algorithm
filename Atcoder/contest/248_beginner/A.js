const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i))
  );

const ans = Array.from({ length: 10 }, (_, i) => i)
  .filter(v => ![...s].map(x => +x).includes(v))
  .join('');

console.log(ans);
