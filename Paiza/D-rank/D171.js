const [P_1, P_2, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);

function solution() {
  const anata = P_1 - N;
  const paiza = P_2 - N;
  console.log(anata, paiza);
}

solution();
