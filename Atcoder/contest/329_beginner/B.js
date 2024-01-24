const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
const max = Math.max(...a);
console.log(Math.max(...a.filter(v => v !== max)));
