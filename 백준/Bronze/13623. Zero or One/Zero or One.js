const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const collection = {};
const result = ['A', 'B', 'C'];

for (let val of input) {
  collection[val] = (collection[val] || 0) + 1;
}

for (let key in collection) {
  if (collection[key] === 1) {
    const ans = result[input.indexOf(Number(key))];
    console.log(ans);
    break;
  } else if (collection[key] === 3) {
    console.log('*');
  }
}
