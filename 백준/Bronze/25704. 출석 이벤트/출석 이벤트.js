const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, p] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(s => (isNaN(s) ? s : +s));

function getSaledPrice() {
  if (n < 5) return p;
  if (n < 10) return p - 500;
  if (n < 15) return Math.min(p - 500, p * 0.9);
  if (n < 20) return Math.min(p - 500, p * 0.9, p - 2000);
  return Math.min(p - 500, p * 0.9, p - 2000, p * 0.75);
}

ans = getSaledPrice();
if (ans < 0) ans = 0;
console.log(ans);
