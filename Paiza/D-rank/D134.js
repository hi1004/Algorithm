const [S] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

(function solution() {
  // slice()
  const answer = S.length < 10 ? S : `${S.slice(0, 10)}\n${S.slice(10)}`;
  console.log(answer);
})();
