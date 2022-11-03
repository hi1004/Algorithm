const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, R] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

// res = n! * (r! * (n-r)!)

const factorial = n => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const combination = (n, r) => {
  return factorial(n) / (factorial(r) * factorial(n - r));
};

console.log(combination(N, R));
