const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, l]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const apples = Array.from({ length: n }, (_, i) => i + 1);
const array = apples.map(apple => l + apple - 1);
const sorted = array.filter(a => a >= 0).sort((a, b) => a - b)[0];
const index = array.findIndex(e => e === sorted);
array.splice(index, 1);

console.log(array.reduce((a, b) => a + b));
