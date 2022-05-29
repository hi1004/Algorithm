const [N] = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

let primes = [2];
for (let i = 3; i <= N; i += 2) {
  if (primes.every(p => i % p)) {
    primes.push(i);
  }
}
console.log(`${primes.join(' ')}`);
