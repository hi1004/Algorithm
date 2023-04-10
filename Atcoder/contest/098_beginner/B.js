let [[N], [S]] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const scores = [];
const letter = new Set(S);

for (let i = 1; i < N; i++) {
  let cnt = 0;
  let left = S.slice(0, i);
  let right = S.slice(i, N);

  letter.forEach(value => {
    if (left.indexOf(value) !== -1 && right.indexOf(value) !== -1) {
      cnt++;
    }
  });

  scores.push(cnt);
}
console.log(Math.max(...scores));
