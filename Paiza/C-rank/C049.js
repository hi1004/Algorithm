const [n, ...f] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map(Number);

let result = 0;
(function solution() {
  const first = f[0] - 1;
  for (let i = 0; i < n - 1; i++) {
    result += Math.abs(f[i] - f[i + 1]);
  }
  console.log(result + first);
})();

(function solution2() {
  let result = 0;
  f.reduce((acc, cur, index) => {
    result += Math.abs(acc - f[index]);
    return cur;
  }, 1);
  console.log(result);
})();
