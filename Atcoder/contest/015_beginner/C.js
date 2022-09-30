const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
let [n, k] = lines[0].split(' ').map(Number);

const nums = lines.map(num => [
  ...new Set(num.split(' ').map(n => Number(n).toString(2))),
]);

const dp = Array(n)
  .fill()
  .map(_ => []);

dp[0] = lines[1].split(' ').map(Number);
for (let i = 1; i < n; i++) {
  const l = lines[i + 1].split(' ').map(Number);
  dp[i - 1].forEach(a => {
    l.forEach(b => {
      dp[i].push(a ^ b);
    });
  });
}

console.log(dp[n - 1].includes(0) ? 'Found' : 'Nothing');
