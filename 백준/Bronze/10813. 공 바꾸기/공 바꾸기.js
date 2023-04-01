const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));
const [N, M] = input.shift();

let basket = Array.from({ length: N }, (_, i) => i + 1);
for (let i = 1; i <= M; i++) {
  let [a, b] = input[i - 1];
  const swap = basket[a - 1];
  basket[a - 1] = basket[b - 1];
  basket[b - 1] = swap;
}
console.log(basket.join(' '));
