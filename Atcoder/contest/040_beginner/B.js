const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

let ans = Infinity;
for (let i = 1; i <= Math.sqrt(N); i++) {
  const a = Math.floor(N / i);
  const b = i;
  const m = N % (a * b);
  ans = Math.min(ans, Math.abs(a - b) + m);
}
console.log(ans);
