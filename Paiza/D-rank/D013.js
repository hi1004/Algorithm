const [m, n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

function solution() {
  const answer = `${Math.floor(m / n)} ${m % n}`;
  return answer;
}
console.log(solution());
