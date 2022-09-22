const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const numbers = fs.readFileSync(file).toString().trim().split(' ').map(Number);

if (numbers.filter((num, i) => num === i + 1).length === 8) {
  console.log('ascending');
} else if (
  numbers.filter((num, i) => num === numbers.length - i).length === 8
) {
  console.log('descending');
} else {
  console.log('mixed');
}
