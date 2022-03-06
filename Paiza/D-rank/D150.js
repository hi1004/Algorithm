const [X, Y] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

(function solution() {
  const answer = X >= Y ? 'Thank you' : Y - X;
  console.log(answer);
})();
