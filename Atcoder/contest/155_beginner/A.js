const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[...a]] = require('fs')
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
let ans = 'No';
for (const key in collection) {
  if (collection[key] === 2) {
    ans = 'Yes';
    break;
  }
}
console.log(ans);
