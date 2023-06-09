const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const collection = {};

for (const value of a) {
  collection[value] = (collection[value] || 0) + 1;
}
let ans = 'YES';
for (const key in collection) {
  if (collection[key] > 1) {
    ans = 'NO';
    break;
  }
}
console.log(ans);
