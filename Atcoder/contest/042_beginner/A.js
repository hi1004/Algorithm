const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const collection = {};

for (let val of input) {
  collection[val] = (collection[val] || 0) + 1;
}

let answer = 'NO';
for (let key in collection) {
  if (key === '5') {
    if (collection[key] === 2) {
      answer = 'YES';
    } else answer = 'NO';
  }
}
console.log(answer);
