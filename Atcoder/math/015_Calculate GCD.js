const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const gcd = (num1, num2) => {
  const a = Math.abs(num1);
  const b = Math.abs(num2);
  return b === 0 ? a : gcd(b, a % b);
};

console.log(gcd(A, B));
