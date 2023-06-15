const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N, M]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

console.log(soltuion(N) + soltuion(M));

function soltuion(num) {
  let ans = 0;

  for (let i = 0; i < num; i++) {
    for (let j = i + 1; j < num; j++) {
      ans++;
    }
  }
  return ans;
}
