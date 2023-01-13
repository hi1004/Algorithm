const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(line.shift());
const nums = line.slice().map(arr => arr.split(' ').map(Number));

const evenArr = nums.map(arr => {
  return arr.filter(n => n % 2 === 0).sort((a, b) => a - b);
});
evenArr.forEach(even => {
  console.log(
    even.reduce((a, b) => a + b, 0),
    even[0]
  );
});
