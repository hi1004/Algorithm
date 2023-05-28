const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let ans = '';
if (s === 'Sunny') ans = 'Cloudy';
else if (s === 'Cloudy') ans = 'Rainy';
else if (s === 'Rainy') ans = 'Sunny';
console.log(ans);
