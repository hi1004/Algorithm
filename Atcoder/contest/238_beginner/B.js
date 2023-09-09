const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N], [...A]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

const arr = [0];
let r = 0;
for (let i = 0; i < N; i++) {
  r = (r + A[i]) % 360;
  arr.push(360 - r);
}
arr.sort((a, b) => a - b);
arr.push(360);
let ans = 0;
for (let i = 0; i < arr.length - 1; i++) {
  ans = Math.max(ans, arr[i + 1] - arr[i]);
}
console.log(ans);
