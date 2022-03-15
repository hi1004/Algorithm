const [number, strArray] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

(function solution() {
  const answer = strArray.join('');
  console.log(answer);
})();
