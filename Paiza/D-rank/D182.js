const [n, m] = require('fs').readFileSync('./Paiza/input.txt', 'utf8').split('\n').map(Number);

function solution(n, m) {
  const answer = Math.floor(n / m);
  return answer;
}
console.log(solution(n, m));
