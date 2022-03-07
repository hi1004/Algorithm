const [S] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const answer = S.replace(/at/g, '@');
  console.log(answer);
})();
