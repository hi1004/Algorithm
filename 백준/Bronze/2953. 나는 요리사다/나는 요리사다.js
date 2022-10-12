const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let count = 0;
const sumArray = [];
for (let i = 0; i < 5; i++) {
  const nums = input[i].split(' ').map(Number);
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  sumArray.push(sum);
}
console.log(sumArray.indexOf(Math.max(...sumArray)) + 1, Math.max(...sumArray));
