const [s1, s2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const answer = s2 === 'F' ? `Hi, Ms. ${s1}` : `Hi, Mr. ${s1}`;
  console.log(answer);
})();
