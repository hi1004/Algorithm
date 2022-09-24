const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [M, D] = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const specialM = 2;
const specialD = 18;

if (specialM > M || (specialM === M && specialD > D)) {
  console.log('Before');
} else if (specialM === M && specialD === D) {
  console.log('Special');
} else {
  console.log('After');
}
