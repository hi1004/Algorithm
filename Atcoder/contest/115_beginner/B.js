const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[d], ...p] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const most = Math.max(...p);
const idx = p.flat().indexOf(most);
p[idx] = Math.floor(most / 2);
console.log(p.flat().reduce((a, b) => a + b));
