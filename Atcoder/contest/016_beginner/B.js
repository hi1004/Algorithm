const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B, C] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (A + B === C && A - B === C) {
  console.log('?');
} else if (A + B === C && A - B !== C) {
  console.log('+');
} else if (A + B !== C && A - B === C) {
  console.log('-');
} else {
  console.log('!');
}
