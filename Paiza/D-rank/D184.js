const [n, S] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

(function solution() {
  S.split('').forEach(s => {
    console.log(s);
  });
})();
