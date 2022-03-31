const [N, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/);

(function solution() {
  const answer = N >= arr[0] ? N * arr[1] : N * arr[2];
  console.log(answer);
})();
