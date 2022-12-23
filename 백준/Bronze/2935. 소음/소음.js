const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const a = input.shift().trim().length - 1;
const b = input.pop().trim().length - 1;
const x = input[0].trim();

if (x === '*') {
  console.log('1' + '0'.repeat(a + b));
} else {
  const max = Math.max(a, b);
  const min = Math.min(a, b);

  if (max === min) {
    console.log('2' + '0'.repeat(min));
  } else {
    console.log('1' + '0'.repeat(max - min - 1) + '1' + '0'.repeat(min));
  }
}
