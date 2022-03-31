const [X, Y, P] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

(function solution() {
  const answer = X % Y > 0 ? Math.floor(X / Y + 1) * P : Math.floor(X / Y) * P;
  console.log(answer);
})();
