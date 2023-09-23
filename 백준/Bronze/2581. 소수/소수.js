const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a], [b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
const ans = [];
const isPrime = n => {
  if (n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = a; i <= b; i++) {
  if (isPrime(i)) {
    ans.push(i);
  }
}
const sum = ans.reduce((a, b) => a + b, 0);
console.log(ans.length === 0 ? -1 : sum + '\n' + Math.min(...ans));
