const [X] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  // Stringincludes();
  // String.replace();
  const answer = X[0].includes('A') ? X.replace('A', 'R') : X;
  console.log(answer);
})();
