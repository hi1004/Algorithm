const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const arr1 = line[0].trim().split('');
const arr2 = line[1].trim().split('');
let count = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      arr1[i] = '';
      arr2[j] = '';
      count += 2;
      break;
    }
  }
}

console.log(arr1.length + arr2.length - count);
