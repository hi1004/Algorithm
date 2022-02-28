const [n_g, n_s, n_b] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution(n_g, n_s, n_b) {
  const answer = `Gold ${n_g}\nSilver ${n_s}\nBronze ${n_b}`;
  return answer;
}

console.log(solution(n_g, n_s, n_b));
