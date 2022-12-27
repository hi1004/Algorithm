const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [h] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

if (h > 6 && h <= 8) {
  console.log(45, 'min');
} else if (h > 8) {
  console.log(60, 'min');
} else {
  console.log('no break');
}
