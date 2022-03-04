const [p_1, f_1, p_2, f_2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

function solution() {
  const num1 = p_1 + f_1;
  const num2 = p_2 + f_2;
  const answer = num1 === num2 ? num1 || num2 : Math.min(num1, num2);
  return answer;
}

console.log(solution());
