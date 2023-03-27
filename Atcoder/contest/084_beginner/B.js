const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b, s] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(s => (isNaN(s) ? s : +s));
s = String(s);

if (
  !isNaN(Number(s.substring(0, a))) &&
  s[a] === '-' &&
  !isNaN(Number(s.substring(a + 1, s.length)))
) {
  console.log('Yes');
} else {
  console.log('No');
}
