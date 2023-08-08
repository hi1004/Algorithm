const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let i = 0;
const factorial = num => {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
};

const coins = {};
for (let i = 1; i <= 10; i++) {
  coins[i] = factorial(i);
}

let result = 0;
for (let i = 10; i >= 1; i--) {
  if (coins[i] <= n) {
    result += Math.floor(n / coins[i]);
    n = n % coins[i];
  }
}
console.log(result);
