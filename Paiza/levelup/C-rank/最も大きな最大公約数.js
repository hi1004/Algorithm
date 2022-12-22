const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

const answer = [];
for (let i = n; i > 0; i--) {
  for (let j = 1; j <= n - 1; j++) {
    if (j < i) {
      answer.push(gcd(i, j));
    }
  }
}
console.log(Math.max(...answer));
