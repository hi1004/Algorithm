const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr1 = input[0].split(' ').map(Number);
const arr2 = input[1].split(' ').map(Number);

let result = 0;
for (let i = 0; i < 3; i++) {
  if (arr1[i] < arr2[i]) {
    result += arr2[i] - arr1[i];
  }
}
console.log(result);
