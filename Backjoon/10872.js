const n = require('fs').readFileSync('./input.txt', 'utf-8');
function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(n));
