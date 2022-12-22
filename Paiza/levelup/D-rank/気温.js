const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let answer = '';
if (x >= 35) {
  answer = 'extremely hot day';
} else if (x >= 30) {
  answer = 'hot summer day';
} else if (x >= 25) {
  answer = 'summer day';
} else if (x < 0) {
  answer = 'ice day';
} else {
  answer = 'normal day';
}
console.log(answer);
