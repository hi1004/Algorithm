const [m, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const numbers = [];
  let answer = m;
  for (let i = 0; i < 10; i++) {
    numbers.push(answer);
    answer += n;
  }
  console.log(numbers.join(' '));
})();
