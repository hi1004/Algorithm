const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const table = input.slice().map(nums => nums.split(' ').map(Number));

const max = Math.max(...table.flat());

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (table[i][j] === max) {
      console.log(max);
      console.log(i + 1, j + 1);
    }
  }
}
