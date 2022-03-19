const [ns] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution1() {
  const answer = ns.match(/\d/gi);
  console.log(answer.join(''));
})();

(function solution2() {
  const answer = ns.match(/[0-9]/gi);
  console.log(answer.join(''));
})();
