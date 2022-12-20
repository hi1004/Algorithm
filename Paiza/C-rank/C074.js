const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [H, W, X] = input.shift().split(' ').map(Number);
const table = input.slice().map(arr => arr.trim().split(''));

const sumText = table.flat().join('');

for (let i = 0; i < sumText.length; i += X) {
  console.log(sumText.substring(i, i + X));
}
