let [x] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

(function solution() {
  while (x >= 2) {
    x /= 2;
  }
  console.log(x === 1 ? 'OK' : 'NG');
})();
