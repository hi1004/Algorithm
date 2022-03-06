const [n, ...p] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

(function solution1() {
  const answer = p.reduce((acc, cur) => {
    return acc + cur;
  });
  console.log(answer);
})();

(function solution2() {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer += p[i];
  }
  console.log(answer);
})();
