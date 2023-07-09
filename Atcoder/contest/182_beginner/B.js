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
let ans = [];
const collection = {};
for (let i = 2; i <= Math.max(...a); i++) {
  for (let j = 0; j < a.length; j++) {
    if (a[j] % i === 0) {
      collection[i] = (collection[i] || 0) + 1;
    }
  }
}
let max = 0;
for (let key in collection) {
  if (collection[key] > max) {
    max = collection[key];
  }
  if (collection[key] === max) {
    ans.push(parseInt(key));
  }
}
console.log(Math.max(...ans));
