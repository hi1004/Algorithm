const [N, ...S] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);

(function solution() {
  console.log(S[Number(N - 1)]);
})();
