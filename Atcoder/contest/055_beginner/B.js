const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

let ans = 1;
for (let i = 1; i <= N; i++) {
  ans = (ans * i) % (1e9 + 7);
}
console.log(ans);
