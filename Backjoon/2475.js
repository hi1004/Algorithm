const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const numbers = fs.readFileSync(file).toString().trim().split(' ').map(Number);

function powSumNum(arr) {
  const powNum = arr.map(num => num ** 2);
  const result = powNum.reduce((acc, cur) => acc + cur) % 10;
  return result;
}
console.log(powSumNum(numbers));
