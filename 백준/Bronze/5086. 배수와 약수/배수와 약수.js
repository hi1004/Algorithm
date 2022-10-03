const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

input.pop();

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  if (a < b) {
    if (b % a === 0) {
      console.log('factor');
    }
  } else {
    if (a % b === 0) {
      console.log('multiple');
    } else {
      console.log('neither');
    }
  }
}
