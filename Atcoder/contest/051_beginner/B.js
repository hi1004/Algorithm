const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [K, S] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);
let ans = 0;
for (let i = 0; i <= K; i++) {
  for (let j = 0; j <= K; j++) {
    const k = S - (i + j);

    if (0 <= k && k <= K) ans++;
  }
}
console.log(ans);
