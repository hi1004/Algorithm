const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const display1 = input[0].split(' ').map(Number);
const display2 = input[1].split(' ').map(Number);

let answer = 'NO';
for (let i = 0; i < display1.length; i++) {
  for (let j = 0; j < display2.length; j++) {
    if (display1[i] === display2[j]) {
      answer = 'YES';
      break;
    }
  }
}
console.log(answer);
