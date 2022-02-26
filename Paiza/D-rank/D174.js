const [k] = require('fs').readFileSync('./paiza/input.txt', 'utf8').split('\n').map(Number);

function solution(k) {
  const answer = k * 1500;
  return answer;
}
console.log(solution(k));
