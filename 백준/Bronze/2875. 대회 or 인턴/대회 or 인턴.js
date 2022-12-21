const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, m, k] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let count = 0;
while (true) {
  if (n < 2 || m < 1 || n + m - 3 < k) {
    break;
  }
  n -= 2;
  m -= 1;
  count++;
}
console.log(count);
