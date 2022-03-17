const [S] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution1() {
  let answer = '';
  S.split('').forEach(s => {
    if (S[1] === S[2] && S[1] === S[3]) {
      answer = 'Yes';
    } else {
      answer = 'No';
    }
  });
  console.log(answer);
})();

(function solution2() {
  const answer = S[1] === S[2] && S[1] === S[3] ? 'Yes' : 'No';
  console.log(answer);
})();
