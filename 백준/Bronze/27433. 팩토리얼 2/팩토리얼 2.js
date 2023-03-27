const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(s => (isNaN(s) ? s : +s));

const factorial = n => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(N));
