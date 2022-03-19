const [x] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const discountX = Math.floor(x / 100);
  const answer = `${discountX}00`;
  console.log(answer);
})();
