const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution() {
  const answer1 = Math.floor(m / n);
  const answer2 = m % n;
  console.log(answer1);
  console.log(answer2);
}

solution();
