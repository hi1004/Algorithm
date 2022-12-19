const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

const [x, y] = input;

const sum = arr => {
  return arr.map(n => Number(n)).reduce((a, b) => a + b, 0);
};
const sumX = sum(x.split('')) % 10;
const sumY = sum(y.split('')) % 10;

if (sumX > sumY) {
  console.log('Bob');
} else if (sumX < sumY) {
  console.log('Alice');
} else {
  console.log('Draw');
}
