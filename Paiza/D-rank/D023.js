const [s] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution1() {
  let count = 0;
  s.split('').forEach(el => {
    if (el === 'A') {
      count++;
    }
  });
  console.log(count);
})();

(function solution2() {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      count++;
    }
  }
  console.log(count);
})();
