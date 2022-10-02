const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

for (let i = 0; i < 3; i++) {
  const yut = ['A', 'B', 'C', 'D', 'E'];
  const nums = input[i].split(' ').map(Number);
  const zeroNums = nums.filter(num => num === 0).length;
  if (zeroNums === 0) {
    console.log(yut[4]);
  } else {
    console.log(yut[zeroNums - 1]);
  }
}
