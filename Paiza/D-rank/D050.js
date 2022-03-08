const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution2() {
  const result = arr.reduce((acc, cur) => {
    if (acc > 5) {
      acc = 5;
    }
    return acc + cur;
  });
})();
