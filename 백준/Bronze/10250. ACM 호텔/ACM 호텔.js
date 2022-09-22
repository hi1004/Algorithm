const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');
const t = Number(line[0]);

for (let i = 0; i < t; i++) {
  const [H, W, N] = line[i + 1].split(' ').map(Number);
  if (N % H === 0) {
    fl = H;
    ho = N / H;
  } else if (N % H !== 0) {
    fl = N % H;
    ho = Math.ceil(N / H);
  }
  if (ho < 10) {
    ho = `0${ho}`;
  }
  console.log(`${fl}${ho}`);
}
