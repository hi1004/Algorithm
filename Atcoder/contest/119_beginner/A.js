const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[days]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const [year, month, day] = days.split('/').map(Number);
console.log(
  new Date(2019, 4, 30) >= new Date(year, month, day) ? 'Heisei' : 'TBD'
);
