const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const numbers = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const arr = numbers.map(number => {
  if (number < 40) {
    number = 40;
  }
  return number;
});
const avg = arr.reduce((acc, cur) => acc + cur) / arr.length;

console.log(avg);
