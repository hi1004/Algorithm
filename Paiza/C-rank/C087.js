const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

function reverseNumber(number) {
  return Number([...String(number)].reverse().join(''));
}

let sum = n + reverseNumber(n);

while (sum !== reverseNumber(sum)) {
  sum = sum + reverseNumber(sum);
}
console.log(sum);
