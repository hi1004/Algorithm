const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b] = fs.readFileSync(file).toString().trim().split(' ');

if (a > 30 || b === 'rainy') {
  console.log('Yes');
} else {
  console.log('No');
}
