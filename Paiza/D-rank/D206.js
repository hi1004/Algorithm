const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  console.log(b, a);
})();
