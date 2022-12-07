const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(line.shift());
const arr = line[0].split(' ').map(Number);

let sum = 0;
let j = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    j++;
    sum += j;
  } else {
    j = 0;
  }
}
console.log(sum);
