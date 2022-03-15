const [...n] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

(function solution() {
  const max = n.reduce((acc, cur) => {
    return Math.max(acc, cur);
  });
  const min = n.reduce((acc, cur) => {
    return Math.min(acc, cur);
  });
  console.log(`${max}\n${min}`);
})();
