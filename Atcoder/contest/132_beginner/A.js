const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[S]] = require('fs')
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
for (let val of S.split('')) {
  collection[val] = (collection[val] || 0) + 1;
}
let ans = 'Yes';
for (let key in collection) {
  if (collection[key] !== 2) {
    ans = 'No';
    break;
  }
}
console.log(ans);
