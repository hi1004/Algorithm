const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

(function solution() {
  const answer = A >= C ? A + B : A;
  console.log(answer);
})();
