const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(s => (isNaN(s) ? s : +s));

if (a <= 11) {
  console.log(280);
} else if (12 <= a && a <= 16) {
  if (b === 0) {
    console.log(320);
  } else {
    console.log(280);
  }
} else {
  console.log(280);
}
