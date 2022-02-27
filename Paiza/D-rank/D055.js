const [s_1, s_2] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

function solution(s_1, s_2) {
  const answer = `Best in ${s_1} ${s_2}`;
  return answer;
}

console.log(solution(s_1, s_2));
