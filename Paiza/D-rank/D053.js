const [s] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const answer = s === 'chocolate' || s === 'candy' ? 'Thanks!' : 'No!';
  console.log(answer);
})();
