const [S] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const answer = S.split('').reverse().join('');
  return console.log(answer);
})();
