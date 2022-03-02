const [a, b, c, d] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
// 여러줄 입력받을때(공백) .split(/\s+/);
function solution() {
  const answer = a * d - b * c;
  return answer;
}
console.log(solution());
