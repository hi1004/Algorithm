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
  let arr = [];
  for (let j = a - 1; j < b; j++) {
    arr.push(basket[j]);
  }
  arr.reverse();
  basket.splice(a - 1, b - a + 1, ...arr);
}
console.log(basket.join(' '));
