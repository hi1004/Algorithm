const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[S]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

if (S.substring(0, S.length / 2) === S.substring((S.length + 3) / 2 - 1)) {
  console.log('Yes');
} else {
  console.log('No');
}
