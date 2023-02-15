const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [s] = fs.readFileSync(file).toString().trim().split(/\s+/);
const collection = {};

for (const val of [...s]) {
  collection[val] = (collection[val] || 0) + 1;
}
const filter = Object.values(collection).filter(n => n % 2);

if (s.length % 2 === 0 && !filter.length) {
  console.log('Yes');
} else {
  console.log('No');
}
