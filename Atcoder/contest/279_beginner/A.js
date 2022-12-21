const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('');

const collection = {};
for (let val of input) {
  collection[val] = (collection[val] || 0) + 1;
}

for (let key in collection) {
  if (key === 'w') {
    collection[key] = collection[key] * 2;
  }
}
console.log(Object.values(collection).reduce((acc, val) => acc + val, 0));
