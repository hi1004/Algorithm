const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, y] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

const arrs = [[1, 3, 5, 7, 8, 10, 12], [4, 6, 9, 11], [2]];
let answer = 'No';
arrs.forEach(arr => {
  if (arr.includes(x) && arr.includes(y)) {
    answer = 'Yes';
    return;
  }
});
console.log(answer);
