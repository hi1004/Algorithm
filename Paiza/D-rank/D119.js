const [N] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

(function solution() {
  const PI = Math.PI;
  const temp1 = PI * 10 ** N;
  const temp2 = Math.floor(temp1);
  const answer = temp2 / 10 ** N;
  console.log(answer);
})();
