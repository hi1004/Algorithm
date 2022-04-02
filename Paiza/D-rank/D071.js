const [t, m] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

(function solution() {
  const result = (t >= 25 || m <= 40) && !(t >= 25 && m <= 40) ? 'Yes' : 'No';
  console.log(result);
})();
