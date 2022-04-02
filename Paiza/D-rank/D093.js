const [N] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

(function solution() {
  const numbers = N.split('').filter(item => {
    return N[0] === item;
  });
  const answer = N.length === numbers.length ? N : 'No';
  console.log(answer);
})();
