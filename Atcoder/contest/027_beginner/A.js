const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const sorted = [...new Set(input.sort((a, b) => a - b))];
const collection = {};
for (let val of input) {
  collection[val] = (collection[val] | 0) + 1;
}
for (let key in collection) {
  if (collection[key] === 1) {
    console.log(key);
  } else if (collection[key] === 3) {
    console.log(key);
  }
}
