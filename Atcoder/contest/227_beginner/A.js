const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, k, a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

const arr = Array.from({ length: n }, (_, i) => i + 1);

let ans = null;
while (k--) {
  if (a > n) a = 1;

  ans = arr[a - 1];
  a++;
}
console.log(ans);
