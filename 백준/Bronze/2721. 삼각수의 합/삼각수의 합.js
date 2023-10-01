const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let arr = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  )
  .flat();
arr.shift();
function T(n) {
  let sum = 0;
  for (let k = 1; k <= n; k++) {
    sum += k;
  }
  return sum;
}
arr.forEach(v => {
  let sum = 0;
  for (let k = 1; k <= v; k++) {
    sum += k * T(k + 1);
  }
  console.log(sum);
});
