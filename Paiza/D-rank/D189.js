const [x, y] = require('fs').readFileSync('./paiza/input.txt', 'utf8').split('\n').map(Number);

function solution(x, y) {
  const answer = y - x;
  return answer;
}

console.log(solution(x, y));
