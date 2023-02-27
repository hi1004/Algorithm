const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [W, A, B] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

if (A < B) {
  if (B - (A + W) < 0) {
    console.log(0);
  } else {
    console.log(B - (A + W));
  }
} else if (A > B) {
  if (A - (B + W) < 0) {
    console.log(0);
  } else {
    console.log(A - (B + W));
  }
} else {
  console.log(0);
}
