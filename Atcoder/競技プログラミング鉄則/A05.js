const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, K] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let answer = 0;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    const white = K - i - j;
    if (white > 0 && white <= N) answer++;
  }
}
console.log(answer);
