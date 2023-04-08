const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(v => (isNaN(v) ? v : +v));

let count = 0;
for (let i = a; i <= b; i++) {
  const num = String(i).split('');

  if (num.reverse().join('') === String(i)) {
    count++;
  }
}
console.log(count);
