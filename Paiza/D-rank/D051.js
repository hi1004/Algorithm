const [...c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const answer = c.join('').split('W').length - 1 >= 5 ? 'OK' : 'NG';
  console.log(answer);
})();
