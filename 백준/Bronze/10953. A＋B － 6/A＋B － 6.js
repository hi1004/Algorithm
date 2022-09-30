const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(line.shift());

const sumNum = arr => arr.reduce((acc, cur) => acc + cur);

for (let i = 0; i < n; i++) {
  console.log(sumNum(line[i].split(',').map(Number)));
}
