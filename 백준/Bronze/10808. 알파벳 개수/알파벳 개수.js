const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const arr = fs.readFileSync(file).toString().trim().split('');

let result = [];
for (let i = 97; i <= 122; i++) {
  result.push(String.fromCharCode(i));
}

const collection = {};
const alpa = {};

for (let val of arr) {
  collection[val] = (collection[val] || 0) + 1;
}
for (let val of result) {
  alpa[val] = alpa[val] || 0;
}

for (let key in collection) {
  alpa[key] = collection[key];
}
console.log(Object.values(alpa).join(' '));
