const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let answer = 0;
if (n % 2 === 0) {
  answer = (n / 2) * m;
} else {
  answer = Math.floor(n / 2) * m + Math.floor(m / 2);
}
console.log(answer);
