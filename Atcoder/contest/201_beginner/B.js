const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...a] = require('fs')
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
a.forEach(arr => {
  collection[arr[0]] = arr[1];
});
const answerValue = Object.values(collection).sort((a, b) => b - a)[1];
for (let key in collection) {
  if (collection[key] === answerValue) {
    console.log(key);
    break;
  }
}
