const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(str => str.trim());

const collection = {};

for (let val of input) {
  collection[val] = (collection[val] || 0) + 1;
}

const win = collection['W'];
if (win === 6 || win === 5) {
  console.log(1);
} else if (win === 4 || win === 3) {
  console.log(2);
} else if (win === 2 || win === 1) {
  console.log(3);
} else {
  console.log(-1);
}
