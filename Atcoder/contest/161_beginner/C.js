const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N, K]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : BigInt(i)))
  );

const num1 = N % K;
let ans = 0;
if (num1 > K - num1) {
  ans = K - num1;
} else {
  ans = num1;
}

console.log(ans.toString());
