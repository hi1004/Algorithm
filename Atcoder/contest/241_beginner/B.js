const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m], [...a], [...b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

const collectionA = {};
const collectionB = {};

for (const val of a) {
  collectionA[val] = (collectionA[val] || 0) + 1;
}
for (const val of b) {
  collectionB[val] = (collectionB[val] || 0) + 1;
}

let ans = 'Yes';
for (const key in collectionB) {
  if (!collectionA[key] || collectionA[key] < collectionB[key]) {
    ans = 'No';
  }
}
console.log(ans);
