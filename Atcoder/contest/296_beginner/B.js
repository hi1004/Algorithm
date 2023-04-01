const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let s = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(v => (isNaN(v) ? v : +v));
const collection = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  6: 'f',
  7: 'g',
  8: 'h',
};
for (let i = s.length - 1; i >= 0; i--) {
  for (let j = s[i].length - 1; j >= 0; j--) {
    if (s[i][j] === '*') {
      console.log(collection[j + 1] + (8 - i));
      break;
    }
  }
}
