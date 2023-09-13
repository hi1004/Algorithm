const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[v], [...a], [...b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let x = 0;
let y = 0;
const res = a.forEach((v, i) => {
  if (v === b[i]) x++;
  else if (b.includes(v)) y++;
});
console.log(x + '\n' + y);
