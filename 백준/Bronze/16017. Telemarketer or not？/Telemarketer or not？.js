const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

if (
  (input[0] === 8 || input[0] === 9) &&
  (input[3] === 8 || input[3] === 9) &&
  input[1] === input[2]
) {
  console.log('ignore');
} else {
  console.log('answer');
}
