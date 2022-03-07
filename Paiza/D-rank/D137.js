const [S] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution1() {
  let count = 0;
  S.split('').forEach(el => {
    if (el === 'y') {
      count++;
    }
  });

  console.log(count);
})();

(function solution2() {
  let count = 0;
  const answer = S.split('').reduce((acc, curr) => {
    if (curr === 'y') {
      count++;
    }
    return count;
  }, 0);
  console.log(answer);
})();
