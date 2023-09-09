const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

const collection = {};
for (const [index, value] of a) {
  if (collection[index]) {
    collection[index] += value;
  } else {
    collection[index] = value;
  }
}

const data = {
  0: 5,
  1: 3,
  2: 2,
  3: 1,
};
let answer = 0;
for (let key in collection) {
  answer += Math.floor(collection[key] / 100) * data[key];
}
console.log(answer);
