const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s]] = require('fs')
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
for (const value of s.toLowerCase()) {
  collection[value] = (collection[value] || 0) + 1;
}
const maxNum = Math.max(...Object.values(collection));

let count = 0;
let ans = '';
for (const key in collection) {
  if (maxNum === collection[key]) {
    count++;
    ans = key.toUpperCase();
    if (count > 1) {
      ans = '?';
      break;
    }
  }
}
console.log(ans);
