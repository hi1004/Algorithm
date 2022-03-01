const N = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const H = N[1].trim().split(' ').map(Number)[0];
const W = N[1].trim().split(' ').map(Number)[1];

function solution() {
  const answer = (H * W) % N[0];
  return answer;
}

console.log(solution());
