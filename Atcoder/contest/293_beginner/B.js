const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [k, ...nums] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const a = Array.from(Array(k), (_, i) => i + 1);
const collection = {};
let i = 0;
for (let [index, value] of a.entries()) {
  collection[value] = false;
}

nums.forEach((n, i) => {
  if (!collection[i + 1]) collection[n] = true;
});
const answer = [];
for (let key in collection) {
  if (!collection[key]) answer.push(key);
}
console.log(answer.length + '\n' + answer.join(' '));
