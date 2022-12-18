const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const N = input.shift();
const strArr = input.slice().map(str => str.trim());

strArr.forEach(str => {
  console.log(str.toLowerCase());
});
