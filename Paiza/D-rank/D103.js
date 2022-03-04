const [S] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);

function solution() {
  // Array.reverse();
  // Array.join();
  const answer = S.split('').reverse().join('');
  return answer;
}
console.log(solution());
