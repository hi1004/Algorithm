const [a] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution1() {
  // Math.pow();
  const answer = 6 * Math.pow(a, 2);
  return answer;
}

function solution2() {
  const answer = 6 * 2 ** 2;
  return answer;
}

console.log(solution1());
console.log(solution2());
