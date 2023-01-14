const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let data = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')[1]
  .split(' ')
  .map(Number);

data = data.map(e => {
  while (true) {
    if (e % 2 === 0) {
      e /= 2;
    } else {
      break;
    }
  }
  return e;
});

console.log([...new Set(data)].length);
