const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  )
  .flat();

const collection = {};
for (const val of a) {
  collection[val] = (collection[val] || 0) + 1;
}

for (const key in collection) {
  if (collection[key] % 2) {
    console.log(key);
    return;
  }
}
