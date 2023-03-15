const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [s] = fs.readFileSync(file).toString().trim().split(/\s+/);

let ans = '';
for (let i = 1; i <= s.length; i++) {
  if (i % 2 === 0) continue;
  ans += s[i - 1];
}
console.log(ans);
