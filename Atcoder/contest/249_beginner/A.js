const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[A, B, C, D, E, F, X]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
const takahasi = A + C <= X ? (A + B) * C : A * B;
const aoki = D + F <= X ? (D + E) * F : D * E;
console.log(takahasi > aoki ? 'Takahashi' : takahasi < aoki ? 'Aoki' : 'Draw');
