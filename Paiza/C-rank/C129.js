const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
a = a.flat();
const A = a.slice(0, m);
const B = a.slice(m);
const collectionA = {};
const collectionB = {};

for (const val of A) {
  collectionA[val] = (collectionA[val] || 0) + 1;
}
for (const val of B) {
  collectionB[val] = (collectionB[val] || 0) + 1;
}
let ans = 'Yes';
for (const key in collectionA) {
  if (collectionA[key] !== collectionB[key]) {
    ans = 'No';
    break;
  }
}
console.log(ans);
