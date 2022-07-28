const n = require('fs').readFileSync('./input.txt', 'utf-8');
function fbn(num) {
  if (num <= 0) return 0;
  if (num <= 2) return 1;
  return fbn(num - 1) + fbn(num - 2);
}

console.log(fbn(n));
