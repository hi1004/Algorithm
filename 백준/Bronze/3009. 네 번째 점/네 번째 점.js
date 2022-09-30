const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const [x1, y1] = line[0].split(' ').map(Number);
const [x2, y2] = line[1].split(' ').map(Number);
const [x3, y3] = line[2].split(' ').map(Number);
const xNumbers = [x1, x2, x3];
const yNumbers = [y1, y2, y3];

const collectionX = {};
const collectionY = {};
for (let val of xNumbers) {
  collectionX[val] = (collectionX[val] || 0) + 1;
}
for (let val of yNumbers) {
  collectionY[val] = (collectionY[val] || 0) + 1;
}

const result = [];
for (let key in collectionX) {
  if (collectionX[key] === 1) {
    result.push(key);
  }
}
for (let key in collectionY) {
  if (collectionY[key] === 1) {
    result.push(key);
  }
}
console.log(result.join(' '));
