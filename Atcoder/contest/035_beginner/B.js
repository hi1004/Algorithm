const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const S = input[0].trim();
const [T] = input[1].split(' ').map(Number);
const pos = [0, 0];
let count = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === 'L') pos[0]--;
  if (S[i] === 'R') pos[0]++;
  if (S[i] === 'U') pos[1]--;
  if (S[i] === 'D') pos[1]++;
  if (S[i] === '?') count++;
}
let ans = Math.abs(pos[0]) + Math.abs(pos[1]);
if (T === 1) {
  ans += count;
} else {
  ans -= count;
  if (ans < 0) {
    ans %= 2;
    ans = -ans;
  }
}
console.log(ans);
