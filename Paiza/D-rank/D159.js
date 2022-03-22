const [...s] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

(function solution() {
  const answer = s.map(s => {
    return Math.max(s.length);
  });
  console.log(Math.max(...answer));
})();
