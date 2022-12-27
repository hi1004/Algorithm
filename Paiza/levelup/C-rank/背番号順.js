const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = input.shift();
const arr = input.slice().map(e => e.split(' ').map(s => s.trim()));

const collection = {};

for (let val of arr) {
  collection[val[0]] = val[1];
}
Object.entries(collection).forEach(arr => console.log(arr.join(' ')));
