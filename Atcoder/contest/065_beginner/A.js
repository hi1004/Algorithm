const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, a, b] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

if (x + 1 <= -a + b) {
  console.log('dangerous');
} else if (-a + b <= 0) {
  console.log('delicious');
} else if (x >= -a + b) {
  console.log('safe');
}
