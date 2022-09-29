const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

function solution(arr) {
  if (!arr.length) return null;

  const result = [];
  const collection = {};
  for (let val of arr) {
    collection[val] = (collection[val] || 0) + 1;
  }

  const max = Math.max(...Object.values(collection));

  for (let key in collection) {
    if (collection[key] === max) {
      return key;
    }
  }
}

console.log(solution(input));
