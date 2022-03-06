const [g, p_1, p_2, p_3] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);

(function solution() {
  const answer = [p_1, p_2, p_3];
  return console.log(answer[g - 1]);
})();
