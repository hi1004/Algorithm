const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [arr] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
arr.sort((a, b) => a - b);
let ans = 0;
for (let i = 0; i < arr.length - 1; i++) {
  ans += arr[i + 1] - arr[i];
}
console.log(ans);
