const [N] = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

function primeOutput(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(primeOutput(N) ? 'Yes' : 'No');
