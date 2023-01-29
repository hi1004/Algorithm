const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = fs.readFileSync(file).toString().trim().split('');

const arr = ['A', 'B', 'C', 'D', 'E', 'F', ...N];

const collection = {};
for (let val of arr) {
  collection[val] = (collection[val] | 0) + 1;
}

console.log(
  Object.values(collection)
    .map(n => n - 1)
    .join(' ')
);
