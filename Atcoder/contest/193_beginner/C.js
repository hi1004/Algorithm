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

let set = new Set();
for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
  let number = i ** 2;
  while (number <= n) {
    set.add(number);
    number *= i;
  }
}
console.log(n - set.size);
