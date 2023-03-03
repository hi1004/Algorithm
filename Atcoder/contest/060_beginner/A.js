const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(/\s+/).join(' ');
const regex = /\w\s./g;
const length = input
  .match(regex)
  .map(str => str.split(' '))
  .filter(arr => arr[0] === arr[1]).length;
console.log(input.match(regex).length === length ? 'YES' : 'NO');
