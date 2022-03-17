const [S] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution1() {
  // String.includes()
  // String.split()
  const answer = S.includes('noaki') ? S.split('noaki').join('') : S;
  console.log(answer);
})();

(function solution2() {
  // String.replace()
  const answer = S.includes('noaki') ? S.replace('noaki', '') : S;
  console.log(answer);
})();
