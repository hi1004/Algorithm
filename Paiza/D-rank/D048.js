const [d_1, d_2, d_3, d_4, d_5] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

(function solution1() {
  const answer = [d_2 - d_1, d_3 - d_2, d_4 - d_3, d_5 - d_4];
  answer.forEach(el => console.log(el));
})();

(function solution2() {
  const answer = [d_1, d_2, d_3, d_4, d_5];
  for (let i = 0; i < answer.length - 1; i++) {
    console.log(answer[i + 1] - answer[i]);
  }
})();
