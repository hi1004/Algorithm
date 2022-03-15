const [S] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const midLength = S.length + 2;
  const answer = `${'+'.repeat(midLength)}\n+${S}+\n${'+'.repeat(midLength)}`;
  console.log(answer);
})();
