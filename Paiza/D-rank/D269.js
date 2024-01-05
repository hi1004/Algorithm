const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [s] = require('fs')
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

console.log([...s].filter((x, i) => (i + 1) % 2).join(''));
