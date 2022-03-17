const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  if ((n % 2 === 0 && m % 2 === 1) || (n % 2 === 1 && m % 2 === 0)) {
    console.log('YES');
  } else {
    console.log('NO');
  }
})();
