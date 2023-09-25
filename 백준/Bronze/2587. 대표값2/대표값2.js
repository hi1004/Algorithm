const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...n] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  )
  .flat();
n = n.sort((a, b) => a - b);
const sum = n.reduce((a, b) => a + b, 0);
console.log(Math.floor(sum / n.length));
console.log(n[Math.floor(n.length / 2)]);
