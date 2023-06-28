const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...s] = require('fs')
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
for (let val of s) {
  collection[val] = (collection[val] || 0) + 1;
}
const result = {
  AC: 0,
  WA: 0,
  TLE: 0,
  RE: 0,
};
for (let key in result) {
  console.log(`${key} x ${collection[key] || result[key]}`);
}
