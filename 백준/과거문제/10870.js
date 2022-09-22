const n = require('fs').readFileSync('./input.txt', 'utf-8');

function fib(num) {
  if (num <= 0) return 0;
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(n));
