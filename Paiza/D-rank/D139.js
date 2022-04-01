const [n, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/);

(function solution() {
  const G = arr.filter(item => item === 'G').length;
  const answer = G === n - G ? 'Draw' : G > n - G ? 'P' : 'G';
  console.log(answer);
})();
